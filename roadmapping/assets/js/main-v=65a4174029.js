function screenshotToggle(rowName) {
	$(`#${rowName} .tab-toggle:first-child`).addClass('selected');
	$(`#${rowName} .tab-toggle`).click(function() {
		$(`#${rowName} .tab-toggle`).removeClass('selected');
		$(this).addClass('selected');

		const item = $(`#${rowName} .tab-toggle`).index(this);
		$(`#${rowName} .featured-screenshot:not(:first-child)`).css('opacity', '0');
		$(`#${rowName} .featured-screenshot:nth-child(${item + 1})`).css('opacity', '100');
		$(`#${rowName} .featured-screenshot-description`).css('display', 'none');
		$(`#${rowName} .featured-screenshot-description:nth-child(${item + 1})`).css('display', 'block');
	});
}
screenshotToggle('index-views');

// Learn more button
$('#learn-more').click((e) => {
	e.preventDefault();
	$('.expand-text').slideToggle('slow');
	$('#learn-more .plus').toggleClass('active');
});

// Make secondary nav fixed
const subNav = $('#sub-nav');
const pos = subNav.position();
$(window).scroll(() => {
    const windowpos = $(window).scrollTop();
    if (subNav.length && windowpos >= pos.top) {
        subNav.addClass('fixed-nav');
        $('#sub-nav .button-sm').removeClass('hide');
    } else if (subNav.length && windowpos < pos.top) {
        subNav.removeClass('fixed-nav');
        $('#sub-nav .button-sm').addClass('hide');
    }
});

function activeHub() {
	const url = window.location.href;
	if (url.includes('/tag/agile')) {
		$('.agile-page').addClass('active-hub');
	} else if (url.includes('/tag/product')) {
		$('.product-page').addClass('active-hub');
	} else if (url.includes('/tag/technology')) {
		$('.tech-page').addClass('active-hub');
	} else if (url.includes('/tag/business')) {
		$('.business-page').addClass('active-hub');
	} else {
		$('.basics-page').addClass('active-hub');
	}
}
activeHub();