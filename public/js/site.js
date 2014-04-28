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
	})
});