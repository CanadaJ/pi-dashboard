$(function() {
	var diskWidget = '<li class=diskWidget><div class="widget-title"><span class="title">Disk Usage</span><span class="glyphicon glyphicon-remove"></span></div><div class="widget-content"></div></li>';

	var gridster = $('.gridster ul').gridster({
		widget_margins: [10,10],
		widget_base_dimensions: [140, 140],
		resize: {
			enabled: true
		}
	}).data('gridster');

	gridster.add_widget(diskWidget, 2, 1);

	$('.glyphicon-remove').click(function() {
		$(this).parent().parent().addClass("removeMe");
		gridster.remove_widget(".removeMe");
	})
});