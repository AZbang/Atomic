const pubchem = require('pubchem-access').domain('compound');

const key = require('./key');
require('./wiki');

module.exports.search = (req, cb) => {
	let translate = 'https://translate.yandex.net/api/v1.5/tr.json/translate?' +
		'key=' + key +
		'&text=' + encodeURIComponent(req) +
		'&lang=ru-en'

	$.getJSON(translate, (data) => {
		$('#info-substance').show();
		$('#info-atom').hide();
		
		let image = $('#info-substance .image').empty();
		let header = $('#info-substance .header').empty();
		let description = $('#info-substance .description').empty();
		let meta = $('#info-substance .meta').empty();

		$('#info-icon').show();

		pubchem
			.setName(data.text[0].replace('the ', ''))
			.getIUPACName()
			.execute((data, status) => {
				if(status !== 1) {
					cb.error && cb.error();
					$('#info-icon').attr('class', 'icon sticky note outline');
					header.text(req[0].toUpperCase() + req.slice(1));
					description.empty().html(`<p>По запросу <b>"${req}"</b> нет данных на Википедиа</p>`);
					return;
				}
				console.log(req);

				let wiki = $('<div></div>').wikiblurb({
					wikiURL: "https://ru.wikipedia.org/",
					page: req,
					section: 0,
					callback: () => {
						if(!wiki[0]) {
							header.text(req[0].toUpperCase() + req.slice(1));
							description.empty().html(`<p>По запросу <b>"${req}"</b> нет данных на Википедиа</p>`);
						}

						$('#info-icon').attr('class', 'lab icon loading');
						$('#info-icon').hide();

						header.text(req[0].toUpperCase() + req.slice(1));
						image.append(wiki.find('img')[0]);

						let wikiDesc = wiki.find('.nbs-wikiblurb > p');
						description.empty().append(wikiDesc);

						$('#info-substance').transition('pulse');
					}
				});

				let cid = data.PropertyTable.Properties[0].CID;
				let url3d = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/record/JSON/?record_type=3d&response_type=display`;
				let url2d = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/record/JSON/?record_type=2d&response_type=display`;
				$.getJSON(url3d)
					.done((data) => {
						data.typeStructure = '3d';
						cb.done && cb.done(data);
					})
					.fail(() => {
						$.getJSON(url2d)
							.done((data) => {
								data.typeStructure = '2d';
								cb.done && cb.done(data);
							})
							.fail(() => {
								cb.error && cb.error();
							});
					})
			}, 'JSON', 'raw');
	});
}