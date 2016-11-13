/**
 * 提示框
 * type:alert, success, error, warning, information, confirm
 */
function webNoty()
{
	var text=arguments[0]?arguments[0]:'提示框';
	var type=arguments[1]?arguments[1]:'information';

	noty({text: text,type: type,layout: 'center',timeout: 3000,animation: {
		open: 'animated flipInX', // Animate.css class names
		close: 'animated flipOutX', // Animate.css class names
		easing: 'swing', // unavailable - no need
		speed: 500 // unavailable - no need
	}});
}

/**
 * 带确认的提示框
 * @param text
 * @param clickOk
 */
function webNotyConfirm(text,clickOk) {
	var text=arguments[0]?arguments[0]:'是否继续当前操作？';

	noty({
		text        : text,
		type        : 'confirm',
		dismissQueue: true,
		layout      : 'center',
		theme       : 'defaultTheme',
		buttons     : [
			{addClass: 'btn btn-danger', text: '确定', onClick: function ($noty) {
				$noty.close();
				clickOk();
			}
			},
			{addClass: 'btn btn-primary', text: '取消', onClick: function ($noty) {
				$noty.close();
			}
			}
		],
		animation: {
			open: 'animated flipInX', // Animate.css class names
			close: 'animated flipOutX', // Animate.css class names
			easing: 'swing', // unavailable - no need
			speed: 500 // unavailable - no need
		}
	});
}
