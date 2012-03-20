(function() {
	if ( wappalyzer == null ) return;

	var w = wappalyzer;

	w.categories = {
		 1: { name: 'CMS',                  plural: 'CMS' },
		 2: { name: 'Message Board',        plural: 'Message Boards' },
		 3: { name: 'Database Manager',     plural: 'Database Managers' },
		 4: { name: 'Documentation Tool',   plural: 'Documentation Tools' },
		 5: { name: 'Widget',               plural: 'Widgets' },
		 6: { name: 'Web Shop',             plural: 'Web Shops' },
		 7: { name: 'Photo Gallery',        plural: 'Photo Galleries' },
		 8: { name: 'Wiki',                 plural: 'Wikis' },
		 9: { name: 'Hosting Panel',        plural: 'Hosting Panels' },
		10: { name: 'Analytics',            plural: 'Analytics' },
		11: { name: 'Blog',                 plural: 'Blogs' },
		12: { name: 'JavaScript Framework', plural: 'JavaScript Frameworks' },
		13: { name: 'Issue Tracker',        plural: 'Issue Trackers' },
		14: { name: 'Video Player',         plural: 'Video Players' },
		15: { name: 'Comment System',       plural: 'Comment Systems' },
		16: { name: 'CAPTCHA',              plural: 'CAPTCHAs' },
		17: { name: 'Font Script',          plural: 'Font Scripts' },
		18: { name: 'Web Framework',        plural: 'Web Frameworks' },
		19: { name: 'Miscellaneous',        plural: 'Miscellaneous' },
		20: { name: 'Editor',               plural: 'Editors' },
		21: { name: 'LMS',                  plural: 'LMS' },
		22: { name: 'Web Server',           plural: 'Web Servers' },
		23: { name: 'Cache Tool',           plural: 'Cache Tools' },
		24: { name: 'Rich Text Editor',     plural: 'Rich Text Editors' },
		25: { name: 'Javascript Graphics',  plural: 'Javascript Graphics' },
		26: { name: 'Mobile Framework',     plural: 'Mobile Frameworks' },
		27: { name: 'Programming Language', plural: 'Programming Languages' },
		28: { name: 'Operating System',     plural: 'Operating Systems' },
		29: { name: 'Search Engine',		plural: 'Search Engines'}
	};

	w.apps = {
		'1und1': 			     { cats: { 1:  6 }, url: /\/shop\/catalog\/browse\?sessid\=/ },
		'1C-Bitrix':             { cats: { 1:  1 }, html: /<link[^>]+components\/bitrix/i, script: /1c\-bitrix/i },
		'2z Project':            { cats: { 1:  1 }, meta: { 'generator': /2z project/i } },
		'AddThis':               { cats: { 1:  5 }, script: /addthis\.com\/js/, env: /^addthis$/ },
		'Adobe GoLive':          { cats: { 1: 20 }, meta: { 'generator': /Adobe GoLive/i } },
		'Advanced Web Stats':    { cats: { 1: 10 }, html: /aws.src = [^<]+caphyon\-analytics/i },
		'Amiro.CMS':             { cats: { 1:  1 }, meta: { 'generator': /Amiro/i } },
		'AOLserver':             { cats: { 1: 22 }, headers: { 'Server': /AOLserver/i } },
		'Apache':                { cats: { 1: 22 }, headers: { 'Server': /(Apache($|[^-])|HTTPD)/i } },
		'Apache Tomcat':         { cats: { 1: 22 }, headers: { 'Server': /Apache-Coyote/i } },
		'Apache Traffic Server': { cats: { 1: 22 }, headers: { 'Server': /YTS/i } },
		'Arc Forum':             { cats: { 1:  2 }, html: /ping\.src = node\.href;/ },
		'Atlassian Confluence':  { cats: { 1:  8 }, html: /Powered by <a href=.http:\/\/www\.atlassian\.com\/software\/confluence/i },
		'Atlassian Jira':        { cats: { 1: 13 }, html: /Powered by <a href=.http:\/\/www\.atlassian\.com\/software\/jira/i },
		'Alloy':                 { cats: { 1: 12 }, env: /^AUI$/ },
		'AWStats':               { cats: { 1: 10 }, meta: { 'generator': /AWStats/i } },
		'Banshee':               { cats: { 1:  1, 2: 18 }, html: /Built upon the <a href=("|')[^>]+banshee-php\.org/i },
		'Backbone.js':           { cats: { 1: 12 }, script: /backbone.*\.js/, env: /^Backbone$/ },
		'BIGACE':                { cats: { 1:  1 }, meta: { 'generator': /BIGACE/ }, html: /Powered by <a href=("|')[^>]+BIGACE|<!--\s+Site is running BIGACE/i },
		'BigDump':               { cats: { 1:  3 }, html: /<!-- <h1>BigDump: Staggered MySQL Dump Importer/ },
		'Bigware':               { cats: { 1:  6 }, html: /bigware/i },
		'blip.tv':               { cats: { 1: 14 }, html: /<(param|embed)[^>]+blip\.tv\/play/i },
		'Blogger':               { cats: { 1: 11 }, meta: { 'generator': /blogger/i }, url: /^(www.)?.+\.blogspot\.com/i },
		'Bugzilla':              { cats: { 1: 13 }, html: /<[^>]+(id|title|name)=("|')bugzilla/i },
		'Burning Board':         { cats: { 1:  2 }, html: /<a href=('|")[^>]+woltlab\.com.+Burning Board/i },
		'CakePHP':               { cats: { 1: 18 }, headers: { 'Set-Cookie': /CAKEPHP=/ }, meta: { 'application-name': /CakePHP/ } },
		'Cargo':                 { cats: { 1:  1 }, script: /\/cargo\./i, html: /<link [^>]+Cargo feed/ },
		'CentOS':                { cats: { 1: 28 }, headers: { 'Server': /CentOS/i, 'X-Powered-By': /CentOS/i } },
		'Chameleon':             { cats: { 1:  1 }, meta: { 'generator': /chameleon\-cms/i } },
		'chartbeat':             { cats: { 1: 10 }, html: /function loadChartbeat\(\) {/i },
		'Chamilo':               { cats: { 1: 21 }, meta: { 'generator': /Chamilo/i }, headers: { 'X-Powered-By': /Chamilo/ } },
		'Cherokee':              { cats: { 1: 22 }, headers: { 'Server': /Cherokee/i } },
		'CKEditor':              { cats: { 1: 24 }, env: /^CKEDITOR$/ },
		'ClickHeat':             { cats: { 1: 10 }, script: /clickheat.*\.js/i, env: /^clickHeatBrowser$/ },
		'ClickTale':             { cats: { 1: 10 }, html: /if\(typeof ClickTale(Tag)*==("|')function("|')\)/, env: /^ClickTale/i },
		'Clicky':                { cats: { 1: 10 }, script: /static\.getclicky\.com/, env: /^clicky$/ },
		'CMS Made Simple':       { cats: { 1:  1 }, meta: { 'generator': /CMS Made Simple/i } },
		'CO2Stats':              { cats: { 1: 10 }, html: /src=("|')http:\/\/www\.co2stats\.com\/propres\.php/ },
		'CodeIgniter':           { cats: { 1: 18 }, headers: { 'Set-Cookie': /(exp_last_activity|exp_tracker|ci_session)/ } },
		'comScore':              { cats: { 1: 10 }, html: /<i{1}frame[^>]* (id=("|')comscore("|')|scr=[^>]+comscore)/, env: /^_?COMSCORE$/i },
		'Concrete5':             { cats: { 1:  1 }, meta: { 'generator': /concrete5/i } },
		'Contao':                { cats: { 1: 1, 2: 6 }, html: /(<!--\s+This website is powered by (TYPOlight|Contao)|<link[^>]+(typolight|contao).css)/i },
		'Contens':               { cats: { 1:  1 }, meta: { 'generator': /contens/i } },
		'ConversionLab':         { cats: { 1: 10 }, script: /conversionlab\.trackset\.com\/track\/tsend\.js/ },
		'Coppermine':            { cats: { 1:  7 }, html: /<!--Coppermine Photo Gallery/i },
		'Cosmoshop':             { cats: { 1:  6 }, script: /cosmoshop_functions\.js/ },
		'Cotonti':               { cats: { 1:  1 }, meta: { 'generator': /Cotonti/i } },
		'CouchDB':               { cats: { 1: 22 }, headers: { 'Server': /CouchDB/i } },
		'cPanel':                { cats: { 1:  9 }, html: /<!-- cPanel/i },
		'Crazy Egg':             { cats: { 1: 10 }, script: /cetrk\.com\/pages\/scripts\/[0-9]+\/[0-9]+\.js/ },
		'CS Cart':               { cats: { 1:  6 }, html: /&nbsp;Powered by (<a href=.http:\/\/www\.cs\-cart\.com|CS\-Cart)/i },
		'CubeCart':              { cats: { 1:  6 }, html: /(Powered by <a href=.http:\/\/www\.cubecart\.com|<p[^>]+>Powered by CubeCart)/i },
		'cufon':                 { cats: { 1: 17 }, script: /cufon\-yui\.js/, env: /^Cufon$/ },
		'dashCommerce':          { cats: { 1:  6 }, html: /name\="\_\_EVENTTARGET" id\="\_\_EVENTTARGET"/ },
		'd3':                    { cats: { 1: 25 }, script: /d3(\.min)?\.js/ },
		'Danneo CMS':            { cats: { 1:  1 }, meta: { 'generator': /Danneo/i } },
		'DataLife Engine':       { cats: { 1:  1 }, meta: { 'generator': /DataLife Engine/i } },
		'Debian':                { cats: { 1: 28 }, headers: { 'Server': /Debian/i, 'X-Powered-By': /(Debian|dotdeb|etch|lenny|squeeze|wheezy)/i } },
		'Demandware':            { cats: { 1:  6 }, html: /<[^>]+demandware.edgesuite/, env: /^dwAnalytics/ },
		'DHTMLX':                { cats: { 1: 12 }, script: /dhtmlxcommon\.js/ },
		'DirectAdmin':           { cats: { 1:  9 }, html: /<a[^>]+>DirectAdmin<\/a> Web Control Panel/i },
		'Disqus':                { cats: { 1: 15 }, script: /disqus_url/, html: /<div[^>]+id=("|')disqus_thread("|')/, env: /^DISQUS/i },
		'Django':                { cats: { 1: 18 }, script: /media\/cms\/js\/csrf\.js/, html: /(Powered by <a[^>]+>Django|<input[^>]name=.csrfmiddlewaretoken)/i, headers: { 'Set-Cookie': /^django/ } },
		'Django CMS':            { cats: { 1:  1 }, script: /media\/cms\/js\/csrf\.js/, headers: { 'Set-Cookie': /django/ } },
		'dojo':                  { cats: { 1: 12 }, script: /dojo(\.xd)?\.js/, env: /^dojo$/ },
		'Dokeos':                { cats: { 1: 21 }, meta: { 'generator': /Dokeos/i }, html: /Portal <a[^>]+>Dokeos|@import "[^"]+dokeos_blue/i, headers: { 'X-Powered-By': /Dokeos/ } },
		'DokuWiki':              { cats: { 1:  8 }, meta: { 'generator': /DokuWiki/i } },
		'DotNetNuke':            { cats: { 1:  1 }, meta: { 'generator': /DotNetNuke/i }, html: /(<!\-\- by DotNetNuke Corporation|<link[^>]+\/portals\/_default\/[^>]+\.css)/i, env: /^(DDN|DotNetNuke)/i },
		'DreamWeaver':           { cats: { 1: 20 }, html: /(<!\-\-[^>]*(InstanceBeginEditable|Dreamweaver[^>]+target|DWLayoutDefaultTable)|function MM_preloadImages\(\) {)/ },
		'Drupal':                { cats: { 1:  1 }, script: /drupal\.js/, html: /(jQuery\.extend\(Drupal\.settings, \{|Drupal\.extend\(\{ settings: \{|<link[^>]+sites\/(default|all)\/themes\/|<style[^>]+sites\/(default|all)\/(themes|modules)\/)/i, headers: { 'X-Drupal-Cache': /.*/, 'X-Generator': /Drupal/, 'Expires': /19 Nov 1978/ }, env: /^Drupal$/ },
		'Drupal Commerce':       { cats: { 1:  6 }, html: /id\=\"block\-commerce\-cart\-cart|class\=\"commerce\-product\-field/i },
		'Dynamicweb':            { cats: { 1:  1 }, meta: { 'generator': /Dynamicweb/i } },
		'e107':                  { cats: { 1:  1 }, script: /e107\.js/ },
		'Ecodoo':                { cats: { 1:  6 }, script: /addons\/lytebox\/lytebox\.js/ },
		'Exhibit':               { cats: { 1: 25 }, script: /exhibit.*\.js/, env: /^Exhibit$/ },
		'ExtJS':                 { cats: { 1: 12 }, script: /ext\-base\.js/, env: /^Ext$/ },
		'ExpressionEngine':      { cats: { 1:  1 }, headers: { 'Set-Cookie': /(exp_last_activity|exp_tracker)/ } },
		'eZ Publish':            { cats: { 1:  1 }, meta: { 'generator': /eZ Publish/i } },
		'FAST Search for SharePoint': {cats: {1: 29}, url: /Pages\/SearchResults\.aspx\?k\=/ },
		'FAST ESP':              { cats: { 1: 29 }, html: /fastsearch|searchProfile\=|searchCategory\=/i, url: /esppublished|searchProfile\=|searchCategory\=/i },
		'Fact Finder':           { cats: { 1: 29 }, html: /fact-finder|\/images\/fact-finder\.gif|ViewParametricSearch|factfinder|Suggest\.ff|FFSuggest/i, url: /ViewParametricSearch|factfinder|ffsuggest/i },
		'FlexCMP':               { cats: { 1:  1 }, meta: { 'generator': /FlexCMP/ }, headers: { 'X-Powered-By': /FlexCMP/ } },
		'FluxBB':                { cats: { 1:  2 }, html: /Powered by (<strong>)?<a href=("|')[^>]+fluxbb/i },
		'Flyspray':              { cats: { 1: 13 }, html: /(<a[^>]+>Powered by Flyspray|<map id=("|')projectsearchform)/ },
		'FreeBSD':               { cats: { 1: 28 }, headers: { 'Server': /FreeBSD/i } },
		'FWP':                   { cats: { 1:  6 }, meta: {'generator': /FWP Shop/ } },
		'FrontPage':             { cats: { 1: 20 }, meta: { 'generator': /Microsoft FrontPage/ }, html: /<html[^>]+urn:schemas\-microsoft\-com:office:office/i },
		'Gambio':                { cats: { 1:  6 }, html: /brought to you by XT-Commerce|[Gg]ambio|content\.php\?coID=\d/},
		'Gauges':                { cats: { 1: 10 }, html: /t\.src = '\/\/secure\.gaug\.es\/track\.js/, env: /^_gauges$/ },
		'Get Satisfaction':      { cats: { 1: 13 }, html: /var feedback_widget = new GSFN\.feedback_widget\(feedback_widget_options\)/ },
		'Google Analytics':      { cats: { 1: 10 }, script: /(\.google\-analytics\.com\/ga\.js|google-analytics\.com\/urchin\.js)/, env: /^gaGlobal$/ },
		'Google App Engine':     { cats: { 1: 22 }, headers: { 'Server': /Google Frontend/i } },
		'Google Font API':       { cats: { 1: 17 }, html: /<link[^>]* href=("|')http:\/\/fonts\.googleapis\.com/ },
		'Google Friend Connect': { cats: { 1:  5 }, script: /google.com\/friendconnect/ },
		'Google Maps':           { cats: { 1:  5 }, script: /(maps\.google\.com\/maps\?file=api|maps\.google\.com\/maps\/api\/staticmap)/ },
		'Google Sites':          { cats: { 1:  1 }, url: /sites.google.com/ },
		'GoStats':               { cats: { 1: 10 }, env: /^_go(stats|_track)/i },
		'Graffiti CMS':          { cats: { 1:  1 }, meta: { 'generator': /Graffiti CMS/i } },
		'Gravatar':              { cats: { 1: 19 }, env: /^Gravatar$/ },
		'Gravity Insights':      { cats: { 1: 10 }, html: /gravityInsightsParams\.site_guid = '/, env: /^GravityInsights$/ },
		'Handlebars':            { cats: { 1: 12 }, env: /^Handlebars$/ },
		'Hiawatha':              { cats: { 1: 22 }, headers: { 'Server': /Hiawatha/i } },
		'Highcharts':            { cats: { 1: 25 }, script: /highcharts.*\.js/, env: /^Highcharts$/ },
		'Hotaru CMS':            { cats: { 1:  1 }, meta: { 'generator': /Hotaru CMS/i } },
		'Hybris': 				 { cats: { 1:  6 }, html: /\/sys_master\/|\/hybr\// },
		'IIS':                   { cats: { 1: 22 }, headers: { 'Server': /IIS/i } },
		'Indexhibit':            { cats: { 1:  1 }, html: /<link [^>]+ndxz-studio/i },
		'InstantCMS':            { cats: { 1:  1 }, meta: { 'generator': /InstantCMS/i } },
		'Intershop':			 { cats: { 1:  6 }, url: /is-bin|INTERSHOP/i, script: /is-bin|INTERSHOP/i },
		'IPB':                   { cats: { 1:  2 }, script: /jscripts\/ips_/ },
		'iWeb':                  { cats: { 1: 20 }, meta: { 'generator': /iWeb/i } },
		'Jalios':                { cats: { 1:  1 }, meta: { 'generator': /Jalios/i } },
		'Javascript Infovis Toolkit': { cats: { 1: 25 }, script: /jit.*\.js/, env: /^\$jit$/ },
		'Jo':                    { cats: { 1: 26, 2: 12 }, env: /^jo(Cache|DOM|Event)$/ },
		'Joomla':                { cats: { 1:  1 }, meta: { 'generator': /Joomla/i }, html: /(<!\-\- JoomlaWorks "K2"|<[^>]+(feed|components)\/com_)/i, headers: { 'X-Content-Encoded-By': /Joomla/ }, env: /^(jcomments)$/i },
		'jqPlot':                { cats: { 1: 25 }, script: /jqplot.*\.js/, env: /^jQuery.jqplot$/ },
		'jQTouch':               { cats: { 1: 26 }, script: /jqtouch.*\.js/i, env:/^jQT$/ },
		'jQuery UI':             { cats: { 1: 12 }, script: /jquery\-ui.*\.js/ },
		'jQuery':                { cats: { 1: 12 }, script: /jquery.*.js/, env: /^jQuery$/ },
		'jQuery Mobile':         { cats: { 1: 26 }, script: /jquery\.mobile.*\.js/i },
		'jQuery Sparklines':     { cats: { 1: 25 }, script: /jquery\.sparkline.*\.js/i },
		'JS Charts':             { cats: { 1: 25 }, script: /jscharts.*\.js/i, env: /^JSChart$/ },
		'JTL Shop':              { cats: { 1:  6 }, html: /(<input[^>]+name=('|")JTLSHOP|<a href=('|")jtl\.php)/i },
		'K2':                    { cats: { 1: 19 }, html: /<!\-\- JoomlaWorks "K2"/ },
		'Kampyle':               { cats: { 1: 10 }, script: /cf\.kampyle\.com\/k_button\.js/ },
		'Kentico CMS':           { cats: { 1:  1 }, meta: { 'generator': /Kentico CMS/i } },
		'Koego':                 { cats: { 1: 10 }, script: /tracking\.koego\.com\/end\/ego\.js/ },
		'Kohana':                { cats: { 1: 18 }, headers: { 'Set-Cookie': /kohanasession/i, 'X-Powered-By': /Kohana/ } },
		'Kolibri CMS':           { cats: { 1:  1 }, meta: { 'generator': /Kolibri/i } },
		'Koobi':                 { cats: { 1:  1 }, meta: { 'generator': /Koobi/i } },
		'lighttpd':              { cats: { 1: 22 }, headers: { 'Server': /lighttpd/i } },
		'LiveJournal':           { cats: { 1: 11 }, url: /^(www.)?.+\.livejournal\.com/i },
		'Liferay':               { cats: { 1: 1  }, env: /^Liferay$/, headers: { 'Liferay-Portal': /Liferay/i } },
		'Lotus Domino':          { cats: { 1: 22 }, headers: { 'Server': /Lotus\-Domino/i } },
		'Magento':               { cats: { 1:  6 }, script: /\/(js\/mage|skin\/frontend\/(default|enterprise))\//, env: /^(Mage|VarienForm)$/ },
		'Mambo':                 { cats: { 1:  1 }, meta: { 'generator': /Mambo/i } },
		'MantisBT':              { cats: { 1: 13 }, html: /<img[^>]+ alt=("|')Powered by Mantis Bugtracker/i },
		'MaxSite CMS':           { cats: { 1:  1 }, meta: { 'generator': /MaxSite CMS/i } },
		'MediaWiki':             { cats: { 1:  8 }, meta: { 'generator': /MediaWiki/i }, html: /(<a[^>]+>Powered by MediaWiki<\/a>|<[^>]+id=("|')t\-specialpages)/i },
		'Meebo':                 { cats: { 1:  5 }, html: /(<iframe id=("|')meebo\-iframe("|')|Meebo\('domReady'\))/ },
		'Microsoft ASP.NET':     { cats: { 1: 18 }, html: /<input[^>]+name=("|')__VIEWSTATE/, headers: { 'X-Powered-By': /ASP\.NET/, 'X-AspNet-Version': /.+/ } },
		'Microsoft SharePoint':  { cats: { 1:  1 }, meta: { 'generator': /Microsoft SharePoint/i }, headers: { 'MicrosoftSharePointTeamServices': /.*/, 'X-SharePointHealthScore': /.*/, 'SPRequestGuid': /.*/ } },
		'MiniBB':                { cats: { 1:  2 }, html: /<a href=("|')[^>]+minibb.+\s+<!--End of copyright link/i },
		'Mint':                  { cats: { 1: 10 }, script: /mint\/\?js/, env: /^Mint$/ },
		'Mixpanel':              { cats: { 1: 10 }, script: /api\.mixpanel\.com\/track/ },
		'MochiKit':              { cats: { 1: 12 }, script: /MochiKit\.js/, env: /^MochiKit$/ },
		'Modernizr':             { cats: { 1: 12 }, script: /modernizr.*\.js/, env: /^Modernizr$/ },
		'MODx':                  { cats: { 1:  1 }, html: /(<a[^>]+>Powered by MODx<\/a>|var el= \$\('modxhost'\);|<script type=("|')text\/javascript("|')>var MODX_MEDIA_PATH = "media";)|<(link|script)[^>]+assets\/snippets\//i },
		'Mollom':                { cats: { 1: 16 }, script: /mollom\.js/, html: /<img[^>]+\/.mollom\/.com/i },
		'Mondo Media':           { cats: { 1:  6 }, meta: { 'generator': /Mondo Shop/ } },
		'Mongrel':               { cats: { 1: 22 }, headers: { 'Server': /Mongrel/ } },
		'Moodle':                { cats: { 1: 21 }, html: /(var moodleConfigFn = function\(me\)|<img[^>]+moodlelogo)/i },
		'Moogo':                 { cats: { 1:  1 }, script: /kotisivukone.js/ },
		'MooTools':              { cats: { 1: 12 }, script: /mootools.*\.js/, env: /^MooTools$/ },
		'Movable Type':          { cats: { 1:  1 }, meta: { 'generator': /Movable Type/i } },
		'Mustache':              { cats: { 1: 12 }, env: /^Mustache$/ },
		'Hiawatha':              { cats: { 1: 22 }, headers: { 'Server': /Hiawatha/i } },
		'MyBB':                  { cats: { 1:  2 }, html: /(<script [^>]+\s+<!--\s+lang\.no_new_posts|<a[^>]* title=("|')Powered By MyBB)/i, env: /^MyBB/ },
		'MyBlogLog':             { cats: { 1:  5 }, script: /pub\.mybloglog\.com/i },
		'Mynetcap':              { cats: { 1:  1 }, meta: { 'generator': /Mynetcap/i } },
		'Nedstat':               { cats: { 1: 10 }, html: /sitestat\(("|')http:\/\/nl\.sitestat\.com/ },
		'Netmonitor':            { cats: { 1: 10 }, script: /netmonitor\.fi\/nmtracker\.js/, env: /^netmonitor/ },
		'Nginx':                 { cats: { 1: 22 }, headers: { 'Server': /nginx/i } },
		'NOIX':                  { cats: { 1: 19 }, html: /<[^>]+(src|href)=[^>]*(\/media\/noix)|<!\-\- NOIX/i },
		'nopCommerce':           { cats: { 1:  6 }, html: /(<!\-\-Powered by nopCommerce|Powered by: <a[^>]+nopcommerce)/i },
		'OneStat':               { cats: { 1: 10 }, html: /var p=("|')http("|')\+\(d\.URL\.indexOf\('https:'\)==0\?'s':''\)\+("|'):\/\/stat\.onestat\.com\/stat\.aspx\?tagver/i },
		'OpenCart':              { cats: { 1:  6 }, html: /(Powered By <a href=("|')[^>]+OpenCart|route = getURLVar\(("|')route)/i },
		'openEngine':            { cats: { 1:  1 }, html: /<meta[^>]+openEngine/i },
		'OpenGSE':               { cats: { 1: 22 }, headers: { 'Server': /GSE/i } },
		'OpenLayers':            { cats: { 1:  5 }, script: /openlayers/, env:/^OpenLayers$/ },
		'Optimizely':            { cats: { 1: 10 }, env: /^optimizely/ },
		'osCommerce':            { cats: { 1:  6 }, html: /<a[^>]*osCsid/i },
		'osCSS':                 { cats: { 1:  6 }, html: /<body onload=("|')window\.defaultStatus='oscss templates';("|')/i },
		'OXID eShop':            { cats: { 1:  6 }, html: /<!--.*OXID eShop/, env: /^ox(TopMenu|ModalPopup|LoginBox|InputValidator)/ },
		'PANSITE':               { cats: { 1:  1 }, meta: { 'generator': /PANSITE/i } },
		'papaya CMS':            { cats: { 1:  1 }, html: /<link[^>]*\/papaya-themes\//i },
		'Parse.ly':              { cats: { 1: 10 }, env: /^PARSELY$/ },
		'PHP':                   { cats: { 1: 27 }, headers: { 'Server': /php/i, 'X-Powered-By': /php/i, 'Set-Cookie': /PHPSESSID/ }, url: /\.php$/ },
		'PHP-Fusion':            { cats: { 1:  1 }, html: /Powered by <a href=("|')[^>]+php-fusion/i },
		'PHP-Nuke':              { cats: { 1:  2 }, meta: { 'generator': /PHP-Nuke/i }, html: /<[^>]+Powered by PHP\-Nuke/i },
		'phpBB':                 { cats: { 1:  2 }, meta: { 'copyright': /phpBB Group/ }, html: /(Powered by <a[^>]+phpbb|<a[^>]+phpbb[^>]+class=.copyright|\tphpBB style name|<[^>]+styles\/(sub|pro)silver\/theme|<img[^>]+i_icon_mini)/i, env: /^(style_cookie_settings|phpbb_)/, headers: { 'Set-Cookie': /^phpbb/ } },
		'phpDocumentor':         { cats: { 1:  4 }, html: /<!-- Generated by phpDocumentor/ },
		'phpMyAdmin':            { cats: { 1:  3 }, html: /(var pma_absolute_uri = '|PMA_sendHeaderLocation\(|<title>phpMyAdmin<\/title>)/i },
		'phpPgAdmin':            { cats: { 1:  3 }, html: /(<title>phpPgAdmin<\/title>|<span class=("|')appname("|')>phpPgAdmin)/i },
		'Piwik':                 { cats: { 1: 10 }, html: /var piwikTracker = Piwik\.getTracker\(/i, env: /^Piwik$/ },
		'Plentymarkets':         { cats: { 1:  6 }, meta: { 'generator': /www\.plentyMarkets\./i } },
		'Plesk':                 { cats: { 1:  9 }, script: /common\.js\?plesk/i },
		'Plone':                 { cats: { 1:  1 }, meta: { 'generator': /Plone/i } },
		'Plura':                 { cats: { 1: 19 }, html: /<iframe src="http:\/\/pluraserver\.com/ },
		'posterous':             { cats: { 1:  1, 2: 11 }, html: /<div class=("|')posterous/i, env: /^Posterous/i },
		'Powergap':              { cats: { 1:  6 }, html: /(s\d\d)\.php\?shopid=\1/ },
		'Prestashop':            { cats: { 1:  6 }, meta: { 'generator': /PrestaShop/i }, html: /Powered by <a href=("|')[^>]+PrestaShop/i },
		'Prototype':             { cats: { 1: 12 }, script: /(prototype|protoaculous)\.js/, env: /^Prototype$/ },
		'Protovis':              { cats: { 1: 25 }, script: /protovis.*\.js/, env: /^protovis$/ },
		'punBB':                 { cats: { 1:  2 }, html: /Powered by <a href=("|')[^>]+punbb/i },
		'Python':                { cats: { 1: 27 }, script: /media\/cms\/js\/csrf\.js/, html: /(Powered by <a[^>]+>Django|<input[^>]name=.csrfmiddlewaretoken)/i, headers: { 'Set-Cookie': /django/ } },
		'Quantcast':             { cats: { 1: 10 }, script: /edge\.quantserve\.com\/quant\.js/, env: /^quantserve$/ },
		'Quick.Cart':            { cats: { 1:  6 }, html: /<a href="[^>]+opensolution\.org\/">Powered by/i },
		'Red Hat':               { cats: { 1: 28 }, headers: { 'Server': /Red Hat/i, 'X-Powered-By': /Red Hat/i } },
		'Raphael':               { cats: { 1: 25 }, script: /raphael.*\.js/, env: /^Raphael$/ },
		'reCAPTCHA':             { cats: { 1: 16 }, script: /(api\-secure\.recaptcha\.net|recaptcha_ajax\.js)/, html: /<div[^>]+id=("|')recaptcha_image/, env: /^Recaptcha$/ },
		'Reddit':                { cats: { 1:  2 }, html: /(<script[^>]+>var reddit = {|<a[^>]+Powered by Reddit|powered by <a[^>]+>reddit<)/i, url: /^(www\.)?reddit\.com/, env: /^reddit$/ },
		'Redmine':               { cats: { 1: 13 }, meta: { 'description': /Redmine/i }, html: /Powered by <a href=("|')[^>]+Redmine/i },
		'Reinvigorate':          { cats: { 1: 10 }, html: /reinvigorate\.track\("/ },
		'RequireJS':             { cats: { 1: 12 }, script: /require.*\.js/ , env: /^requirejs$/},
		'Ruby':                  { cats: { 1: 27 }, headers: { 'Server': /(Mongrel|WEBrick|Ruby|mod_rails|mod_rack|Phusion.Passenger)/i, 'X-Powered-By': /(mod_rails|mod_rack|Phusion.Passenger)/i } },
		'S.Builder':             { cats: { 1:  1 }, meta: { 'generator': /S\.Builder/i } },
		's9y':                   { cats: { 1:  1 }, meta: { 'generator': /Serendipity/i, 'Powered-By': /Serendipity/i } },
		'script.aculo.us':       { cats: { 1: 12 }, script: /(scriptaculous|protoaculous)\.js/, env: /^Scriptaculous$/ },
		'Sencha Touch':          { cats: { 1: 26, 2: 12}, script: /sencha\-touch.*\.js/ },
		'Seoshop':               { cats: { 1:  6 }, html: /http:\/\/www\.getseoshop\.com/ },
		'ShareThis':             { cats: { 1:  5 }, script: /w\.sharethis\.com\//, env: /^SHARETHIS$/ },
		'Shopify':               { cats: { 1:  6 }, html: /<link[^>]+=cdn\.shopify\.com/, env: /^Shopify$/ },
		'sIFR':                  { cats: { 1: 17 }, script: /sifr\.js/ },
		'Site Meter':            { cats: { 1: 10 }, script: /sitemeter.com\/js\/counter\.js\?site=/ },
		'SiteCatalyst':          { cats: { 1: 10 }, html: /var s_code=s\.t\(\);if\(s_code\)document\.write\(s_code\)/i },
		'SiteEdit':              { cats: { 1:  1 }, meta: { 'generator': /SiteEdit/i } },
		'Smartstore':            { cats: { 1:  6 }, script: /smjslib\.js/ },
		'SMF':                   { cats: { 1:  2 }, html: /<script [^>]+\s+var smf_/i, env: /^smf_/ },
		'sNews':                 { cats: { 1:  1 }, meta: { 'generator': /sNews/ } },
		'Snoobi':                { cats: { 1: 10 }, script: /snoobi\.com\/snoop\.php/ },
		'SOBI 2':                { cats: { 1: 19 }, html: /(<!\-\- start of Sigsiu Online Business Index|<div[^>]* class=("|')sobi2)/i },
		'SoundManager':          { cats: { 1: 12 }, env: /^(SoundManager|BaconPlayer)$/ },
		'SPIP':                  { cats: { 1:  1 }, meta: { 'generator': /SPIP/i }, headers: { 'X-Spip-Cache': /.*/ } },
		'SQL Buddy':             { cats: { 1:  3 }, html: /(<title>SQL Buddy<\/title>|<[^>]+onclick=("|')sideMainClick\(("|')home\.php)/i },
		'Squarespace':           { cats: { 1:  1 }, html: /Squarespace\.Constants\.CURRENT_MODULE_ID/i },
		'Squiz Matrix':          { cats: { 1:  1 }, meta: { 'generator': /Squiz Matrix/ }, html: /  Running (MySource|Squiz) Matrix/i, 'X-Powered-By': /Squiz Matrix/ },
		'StatCounter':           { cats: { 1: 10 }, script: /statcounter\.com\/counter\/counter/ },
		'Store Systems':         { cats: { 1:  6 }, html: /Shopsystem von <a href="http:\/\/www\.store-systems\.de"|\.mws_boxTop/ },
		'SWFObject':             { cats: { 1: 19 }, script: /swfobject.*\.js/i, env: /^SWFObject$/ },
		'swift.engine':          { cats: { 1:  1 }, headers: { 'X-Powered-By': /swift\.engine/ } },
		'Swiftlet':              { cats: { 1: 18 }, meta: { 'generator': /Swiftlet/i }, html: /Powered by <a href=("|')[^>]+Swiftlet/i, headers: { 'X-Swiftlet-Cache': /.*/, 'X-Powered-By': /Swiftlet/, 'X-Generator': /Swiftlet/ } },
		'Textpattern CMS':       { cats: { 1:  1 }, meta: { 'generator': /Textpattern/i } },
		'Timeplot':              { cats: { 1: 25 }, script: /timeplot.*\.js/, env: /^Timeplot$/ },
		'TinyMCE':               { cats: { 1: 24 }, env: /^tinyMCE$/ },
		'TomatoCart':            { cats: { 1:  6 }, meta: { 'generator': /TomatoCart/i } },
		'Trac':                  { cats: { 1: 13 }, html: /(<a id=("|')tracpowered)/i },
		'Tumblr':                { cats: { 1: 11 }, html: /<iframe src=("|')http:\/\/www\.tumblr\.com/i, url: /^(www.)?.+\.tumblr\.com/i, headers: { 'X-Tumblr-Usec': /.*/ } },
		'Twilight CMS':          { cats: { 1:  1 }, headers: { 'X-Powered-CMS': /Twilight CMS/ } },
		'Twitter Bootstrap':     { cats: { 1: 18 }, script: /twitter\.github\.com\/bootstrap/, html: /<link[^>]+bootstrap[^>]+css/, env: /^Twipsy$/ },
		'Typekit':               { cats: { 1: 17 }, script: /use.typekit.com/, env: /^Typekit$/ },
		'TypePad':               { cats: { 1: 11 }, meta: { 'generator': /typepad/i }, url: /^(www.)?.+\.typepad\.com/i },
		'TYPO3':                 { cats: { 1:  1 }, headers: { 'Set-Cookie': /fe_typo_user/ }, meta: { 'generator': /TYPO3/i }, html: /(<(script[^>]* src|link[^>]* href)=[^>]*fileadmin|<!--TYPO3SEARCH)/i, url: /\/typo3/i },
		'Ubercart':              { cats: { 1:  6 }, script: /uc_cart\/uc_cart_block\.js/ },
		'Ubuntu':                { cats: { 1: 28 }, headers: { 'Server': /Ubuntu/i, 'X-Powered-By': /Ubuntu/i } },
		'Umbraco':               { cats: { 1:  1 }, meta: { 'generator': /umbraco/i }, headers: { 'X-Umbraco-Version': /.+/ }, html: /powered by <a href=[^>]+umbraco/i },
		'Underscore.js':         { cats: { 1: 12 }, script: /underscore.*\.js/ },
		'UNIX':                  { cats: { 1: 28 }, headers: { 'Server': /Unix/i } },
		'UserRules':             { cats: { 1: 13 }, html: /var _usrp =/ , env: /^\_usrp$/ },
		'UserVoice':             { cats: { 1: 13 }, env: /^UserVoice$/ },
		'Vanilla':               { cats: { 1:  2 }, html: /<body id=("|')(DiscussionsPage|vanilla)/i, headers: { 'X-Powered-By': /Vanilla/ } },
		'Varnish':               { cats: { 1: 22 }, headers: { 'X-Varnish': /.+/, 'X-Varnish-Age': /.+/, 'X-Varnish-Cache': /.+/, 'X-Varnish-Action': /.+/, 'X-Varnish-Hostname': /.+/, 'Via': /Varnish/i } },
		'vBulletin':             { cats: { 1:  2 }, meta: { 'generator': /vBulletin/i }, env: /^(vBulletin|vB_)/ },
		'viennaCMS':             { cats: { 1:  1 }, html: /powered by <a href=("|')[^>]+viennacms/i },
		'Vignette':              { cats: { 1:  1 }, html: /<[^>]+?=("|')(vgn\-ext|vgnext)/i },
		'Vimeo':                 { cats: { 1: 14 }, html: /<(param|embed)[^>]+vimeo\.com\/moogaloop/i },
		'VirtueMart':            { cats: { 1:  6 }, html: /<div id=("|')vmMainPage/ },
		'VisualPath':            { cats: { 1: 10 }, script: /visualpath[^\/]*\.trackset\.it\/[^\/]+\/track\/include\.js/ },
		'Vox':                   { cats: { 1: 11 }, url: /^(www.)?.+\.vox\.com/i },
		'VP-ASP':                { cats: { 1:  6 }, script: /vs350\.js/, html: /<a[^>]+>Powered By VP\-ASP Shopping Cart<\/a>/ },
		'W3Counter':             { cats: { 1: 10 }, script: /w3counter\.com\/tracker\.js/ },
		'Web Optimizer':         { cats: { 1: 10 }, html: /<title [^>]*lang=("|')wo("|')>/ },
		'Websale':               { cats: { 1:  6 }, url: /\/websale7\// },
		'webEdition':            { cats: { 1:  1 }, meta: { 'generator': /webEdition/i, 'DC.title': /webEdition/i } },
		'WebGUI':                { cats: { 1:  1 }, meta: { 'generator': /WebGUI/i } },
		'WebPublisher':          { cats: { 1:  1 }, meta: { 'generator': /WEB\|Publisher/i } },
		'WebsiteBaker':          { cats: { 1:  1 }, meta: { 'generator': /WebsiteBaker/i } },
		'Webtrekk':              { cats: { 1: 10 }, html: /var webtrekk = new Object/ },
		'Webtrends':             { cats: { 1: 10 }, html: /<img[^>]+id=("|')DCSIMG("|')[^>]+webtrends/i, env: /^(WTOptimize|WebTrends)/i },
		'Weebly':                { cats: { 1:  1 }, html: /<[^>]+class=("|')weebly/i },
		'WikkaWiki':             { cats: { 1:  8 }, meta: { 'generator': /WikkaWiki/ }, html: /Powered by <a href=("|')[^>]+WikkaWiki/i },
		'wink':                  { cats: { 1: 26, 2: 12 }, script: /(\_base\/js\/base|wink).*\.js/i, env: /^wink$/ },
		'Wolf CMS':              { cats: { 1:  1 }, html: /<a href=("|')[^>]+wolfcms.org.+Wolf CMS.+inside/i },
		'Woopra':                { cats: { 1: 10 }, script: /static\.woopra\.com/ },
		'WordPress':             { cats: { 1:  1, 2: 11 }, meta: { 'generator': /WordPress/i }, html: /<link rel=("|')stylesheet("|') [^>]+wp-content/i, env: /^wp_username$/ },
		'xajax':                 { cats: { 1: 12 }, script: /xajax_core.*\.js/i },
		'Xanario':               { cats: { 1:  6 }, meta: { 'generator': /xanario shopsoftware/i } },
		'XenForo':               { cats: { 1:  2 }, html: /(jQuery\.extend\(true, XenForo|Forum software by XenForo&trade;|<!\-\-XF:branding)/ },
		'XiTi':                  { cats: { 1: 10 }, html: /<[^>]+src=("|')[^>]+xiti.com\/hit.xiti/i, env: /^Xt_/ },
		'XMB':                   { cats: { 1:  2 }, html: /<!-- Powered by XMB/i },
		'xui':                   { cats: { 1: 26, 2: 12 }, script: /[^a-zA-Z]xui.*\.js/i, env: /^xui$/ },
		'XOOPS':                 { cats: { 1:  1 }, meta: { 'generator': /XOOPS/i } },
		'xtCommerce':            { cats: { 1:  6 }, meta: { 'generator': /xt:Commerce/ }, html: /<div class=("|')copyright("|')>.+<a[^>]+>xt:Commerce/i },
		'YaBB':                  { cats: { 1:  2 }, html: /Powered by <a href=("|')[^>]+yabbforum/i },
		'Yahoo! Web Analytics':  { cats: { 1: 10 }, script: /d\.yimg\.com\/mi\/ywa\.js/ },
		'Yandex.Metrika':        { cats: { 1: 10 }, script: /mc\.yandex\.ru\/metrika\/watch\.js/ },
		'YouTube':               { cats: { 1: 14 }, html: /<(param|embed|iframe)[^>]+youtube(-nocookie)?\.com\/(v|embed)/i },
		'YUI Doc':               { cats: { 1:  4 }, html: /<html[^>]* yuilibrary\.com\/rdf\/[0-9.]+\/yui\.rdf/i },
		'YUI':                   { cats: { 1: 12 }, script: /\/yui\/|yui\.yahooapis\.com/, env: /^YAHOO$/ },
		'Zen Cart':              { cats: { 1:  6 }, meta: { 'generator': /Zen Cart/i } },
		'Zend':                  { cats: { 1: 22 }, headers: { 'X-Powered-By': /Zend/ } },
		'Zepto':                 { cats: { 1: 12 }, script: /zepto.*.js/, env: /^Zepto$/ }
		};
})();