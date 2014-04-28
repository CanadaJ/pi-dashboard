$(function() {
	$.ajax({
		url: '/api/disk',
		success: function(data) {
			$('.disk-pre').text(data);
		}
	});

	$.ajax({
		url: '/api/temp',
		success: function(data) {
			$('.temp-pre').text(data);
		}
	});

	$.ajax({
		url: '/api/net',
		success: function(data) {
			for(var i = 0; i < data.length; i++) {
				$('.net-tabs').prepend('<li><a data-target="#' + data[i] + '-pre" id="' + data[i] + '-tab" data-toggle="tab">' + data[i] + "</a></li>");
				$('.pre-container').prepend('<div class="tab-pane" id="' + data[i] + '-pre"></div>');
				$.ajax({
					url: '/api/net/' + data[i],
					success: function(data2) {
						$('#' + data2.name + '-pre').prepend('<pre>' + data2.data + '</pre>');
					}
				});
			}
			$('.net-tabs a:last').tab('show');
		}
	});
});