$(function() {

	function getData() {
		$('#loadingBarInner').animate({width: '100%'}, 100);

		$('.disk-pre').text('Waiting...');
		$.ajax({
			url: '/api/disk',
			success: function(data) {
				$('.disk-pre').text(data.response);
			},
			error: function(xhr, status, error) {
				$('.disk-pre').text('Something went wrong...\nStatus: ' + status + '\nError: ' + error + '\nTrying again in 30 seconds...');
			}
		});

		$('.temp-pre').text('Waiting...');
		$.ajax({
			url: '/api/temp',
			success: function(data) {
				$('.temp-pre').text(data.response);
			},
			error: function(xhr, status, error) {
				$('.temp-pre').text('Something went wrong...\nStatus: ' + status + '\nError: ' + error + '\nTrying again in 30 seconds...');
			}
		});

		$('.net-pre').text('Waiting...');
		$.ajax({
			url: '/api/net/all',
			success: function(data) {
				$('.net-pre').text(data.response);
			},
			error: function(xhr, status, error) {
				$('.net-pre').text('Something went wrong...\nStatus: ' + status + '\nError: ' + error + '\nTrying again in 30 seconds...');
			}
		});

		$('#loadingBarInner').animate({width: '0%'}, 30000);
	}

	var refreshData = setInterval(getData, 30000);

	getData();
});