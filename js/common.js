function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) + ((expires) ? "; expires=" + expires : "; expires=Mon, 07-Dec-2020 00:00:00 GMT") + ((path) ? "; path=" + path : "; path=/") + ((domain) ? "; domain=" + domain : "") + ((secure) ? "; secure" : "");
}


(function($) {
    $(document).ready(function() {
        if ($.fn.owlCarousel) {
            $('.owl-three-items').owlCarousel({
                navText: ['', ''],
                touchDrag: true,
                loop: true,
                nav: true,
                autoplay: true,
                smartSpeed: 1000,
                autoplayTimeout: 2000,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true,
                    },
                    561: {
                        items: 2,
                        nav: false,
                        dots: true,
                    },
                    768: {
                        items: 2,
                        nav: true,
                        dots: false,
                        margin: 15,
                    },
                    992: {
                        items: 3,
                        nav: true,
                        center: true,
                        loop: true,
                        dots: false,
                    }
                },
                onInitialized: function(event) {
                    $('.owl-three-items-action').attr('href', $(event.target).find('.owl-item.active.center .midd-item').attr('href'));
                },
                onChanged: function(event) {
                    var currentItem = event.item.index;
                    $('.owl-three-items-action').attr('href', $(event.target).find('.owl-item').eq(currentItem).find('.midd-item').attr('href'));
                }
            });
        }
        $('.carousel').carousel({
            interval: 2300
        })
        $('.owl-carousel-reviews').owlCarousel({
            loop: true,
            margin: 3,
            nav: true,
            margin: 30,
            dots: true,
            navText: ["", ""],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
        $('.owl-carousel-coment').owlCarousel({
            loop: true,
            margin: 3,
            nav: false,
            margin: 30,
            dots: false,
            autoplay: true,
            smartSpeed: 1000,
            autoplayTimeout: 3000,
            items: 1,
            navText: ["", ""]
        });

        $('.owl-carousel-person').owlCarousel({
            loop: true,
            margin: 3,
            nav: false,
            margin: 30,
            dots: false,
            autoplay: true,
            smartSpeed: 750,
            autoplayTimeout: 3000,
            items: 1,
            navText: ["", ""]
        });

        $('.owl-carousel-img-news').owlCarousel({
            loop: true,
            margin: 3,
            nav: true,
            margin: 30,
            dots: true,
            autoplay: true,
            smartSpeed: 1000,
            autoplayTimeout: 3000,
            items: 1,
            navText: ["", ""]
        });
        $('.owl-carousel-similar-news').owlCarousel({
            loop: true,
            margin: 3,
            nav: true,
            margin: 30,
            dots: false,
            navText: [" ", " "],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3
                }
            }
        });
        $('.owl-thumb').owlCarousel({
            items: 1,
            dots: false,
            autoplay: true,
            loop: true,
            thumbs: true,
            thumbsPrerendered: true,
            thumbContainerClass: 'owl-thumbs',
            thumbItemClass: 'thumb-box',
            onInitialized: startProgressBar,
            onTranslate: resetProgressBar,
            onTranslated: startProgressBar,
            margin: 15,
            nav: true,
            navText: ['', ''],
            responsive: {
                0: {
                    nav: false,
                    dots: true
                },
                561: {
                    items: 1,
                    nav: true,
                }
            }
        });

        function startProgressBar() {
            $(".slide-progress").css({
                width: "100%",
                transition: "width 5000ms"
            });
        }

        function resetProgressBar() {
            $(".slide-progress").css({
                width: 0,
                transition: "width 0s"
            });
        }


        $('.modal').on('shown.bs.modal', function(event) {
            var $btn = $(event.relatedTarget);

            if ($btn.length > 0) {
                if ($btn[0].hasAttribute('data-page')) {
                    var pageInput = $(event.target).find('[name="page"]');
                    var pageInputID = $(event.target).find('[name="request_callbmod[page]"]');
                    if (pageInput.length > 0) {
                        pageInput.val($btn.attr('data-page'));
                    }
                    if (pageInputID.length > 0) {
                        pageInputID.val($btn.attr('data-page'));
                    }
                }

                if ($btn[0].hasAttribute('data-section')) {
                    var sectionInput = $(event.target).find('[name="section"]');
                    var sectionInputID = $(event.target).find('[name="request_callbmod[section]"]');
                    if (sectionInput.length > 0) {
                        sectionInput.val($btn.attr('data-section'));
                    }
                    if (sectionInputID.length > 0) {
                        sectionInputID.val($btn.attr('data-section'));
                    }
                }
            }
        });

        $('.modal').on('hidden.bs.modal', function(event) {
            var $modal = $(event.target),
                $inputs = $modal.find('input, textarea'),
                $form = $modal.find('form');

            var $cont = $modal.find('.modal-form-content');
            var $mess = $modal.find('.modal-form-message');

            if ($cont.length > 0 && $mess.length > 0) {
                $cont.show();
                $mess.hide();
            }

            if ($modal.data('subscribe-once') && $modal.data('form-sent')) {
                $('#subscribeModal').modal('hide').remove();
            }
        });

        // Swipable img
        var draggable = $('.dragable-child');
        var viewport = $('.dragable-container');

        if (draggable.length > 0 && viewport.length > 0) {
            draggable.one('drag', function() {
                $(this).parent().addClass('no-icon');
            });

            $(window).on('load resize', function() {
                var viewportOffset = viewport.offset();
                var box = {
                    x1: viewportOffset.left + (viewport.outerWidth() - draggable.outerWidth()),
                    y1: viewportOffset.top + (viewport.outerHeight() - draggable.outerHeight()),
                    x2: viewportOffset.left,
                    y2: viewportOffset.top
                };

                draggable
                    .css({
                        left: 0,
                        top: 0,
                    })
                    .draggable({
                        containment: [box.x1, box.y1, box.x2, box.y2]
                    });
            });
        }

        var img = [];
        // Avatar cropper
        function renderFullAvatar(file) {
            img.length = 0;
            // generate a new FileReader object
            var reader = new FileReader();

            // inject an image with the src url
            reader.onload = function(event) {
                the_url = event.target.result;
                // console.log('onload', the_url);
                $('#avatarCropModal').modal('show');
                $('#userAvatar').attr('src', '');
                $('.cropper-container .cropper-canvas img').attr('src', '');
                $('.cropper-container .cropper-view-box img').attr('src', '');
                $('#userAvatar').attr('src', the_url);
                $('.cropper-container .cropper-canvas img').attr('src', the_url);
                $('.cropper-container .cropper-view-box img').attr('src', the_url);
            }

            // when the file is read it triggers the onload event above.
            reader.readAsDataURL(file);
        }

        $('.user-photo-holder').on('click', function() {
            $('#avatar-file').trigger('click');
        });

        $('#avatar-file').on('change', function(event) {
            renderFullAvatar(this.files[0]);
            $(this).val('');
        });


        $('#userAvatar').on('load', function() {
            var $image = $(this),
                $btn = $('#saveCrop');
            $modal = $image.closest('.modal-dialog');


            if (document.documentElement.clientHeight > 300) {
                wd = 600;
            } else {
                wd = 300;
            }

            var he = document.documentElement.clientHeight;
            if (he > $image[0].width) {
                he = $image[0].width + 80;
            }


            $('.cropper-container .cropper-canvas img').css('width', wd);
            $('.cropper-container .cropper-view-box img').css('height', he);


            $image.cropper({
                aspectRatio: 3 / 4,
                height: he,
                viewMode: 2,
                built: function() {
                    $btn.on('click', function(event) {
                        event.preventDefault();
                        var canvas = $image.cropper('getCroppedCanvas');
                        var canvaURL = canvas.toDataURL('image');

                        img.push(canvaURL);
                        $('.user-photo-holder').html('<img alt="Аватар пользователя" src="' + img[0] + '" />');
                        $('#userAvatarInput').attr('value', img[0]);
                        $('#avatarCropModal').modal('hide');
                        $image.cropper('destroy');
                    });
                }
            });
        });

        $('#avatarCropModal').on('hidden.bs.modal', function() {
            $('#userAvatar').cropper('destroy');
        });

        var tinymceFieldValidator = {
            validators: {
                notEmpty: {
                    message: (window.location.href.match(/\/en\//g)) ? 'Boxes that are required to be filled' : 'Данное поле обязательно для заполнения'
                },
                callback: {
                    message: (window.location.href.match(/\/en\//g)) ? 'Boxes that are required to be filled' : 'Данное поле обязательно для заполнения',
                    callback: function(value, validator, $field) {
                        // Get the plain text without HTML
                        var text = tinyMCE.activeEditor.getContent({
                            format: 'text'
                        });

                        return text.trim().length > 1;
                    }
                }
            }
        }

        tinymce.init({
            selector: 'textarea.tinymce-textarea',
            menubar: false,
            statusbar: false,
            toolbar: 'bold italic bullist numlist',
            plugins: "paste",
            paste_as_text: true,
            height: 300,
            content_css: "/int/tinymce/custom.css",
            setup: function(editor) {
                editor.on('keyup', function(e) {
                    editor.save();
                    var $inputs = $(editor.formElement).find('textarea:not(".scip")');

                    $inputs.each(function() {
                        var $this = $(this);
                        $(editor.formElement).bootstrapValidator('revalidateField', $this);
                    });
                });
            }
        });

        // Resume Constructor validation and tabs functionality
        var bookIndex = 0;
        $('.complexFormValidate')
            .bootstrapValidator({
                feedbackIcons: {
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                },
                icon: {
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                },
                excluded: [':disabled'],
                fields: {
                    'information': tinymceFieldValidator,
                    // 'job[0][duties]': tinymceFieldValidator,
                    'trening[0][result]': tinymceFieldValidator,
                    'additionl-info': tinymceFieldValidator,
                },
            })
            .on('click', '.addButton', function() {
                bookIndex++;
                var $form = $(this).closest('form'),
                    $template = $($(this).data('target')),
                    $clone = $template
                    .clone()
                    .removeClass('hide')
                    .removeAttr('id')
                    .insertAfter($form.find('.form-block').last()),
                    fieldsPrefix = $(this).closest('form').data('prefix'),
                    $inputs = $clone.find('[name]'),
                    $labels = $clone.find('[for]');

                var top = $clone.offset().top;

                $('html, body').animate({
                    scrollTop: top
                }, 800);



                var $textAreas = $clone.find('textarea')

                $textAreas.each(function() {
                    var id = $(this).attr('id');
                    tinyMCE.execCommand('mceAddEditor', false, id);
                });

                $inputs.each(function() {
                    var $this = $(this),
                        name = $this.attr('name');

                    $this
                        .attr('name', fieldsPrefix + '[' + bookIndex + ']' + name)
                        .attr('id', fieldsPrefix + '[' + bookIndex + ']' + name);
                    if (!$this.hasClass('scip')) {
                        if ($this.is('textarea'))
                            $form.bootstrapValidator('addField', $this, tinymceFieldValidator);
                        else
                            $form.bootstrapValidator('addField', $this);
                    }
                });

                $labels.each(function() {
                    var $this = $(this),
                        forr = $this.attr('for');

                    $this
                        .attr('for', fieldsPrefix + '[' + bookIndex + ']' + forr);
                });
            })
            .on('click', '.removeBtn', function(event) {
                event.preventDefault();

                var $form = $(this).closest('form'),
                    $row = $(this).closest('.clonableContainer'),
                    $inputs = $row.find('[name]');


                $inputs.each(function() {
                    var $this = $(this);
                    // Remove fields
                    if (!$this.hasClass('scip')) $form.bootstrapValidator('removeField', $this);
                });

                // Remove element containing the fields
                var $textAreas = $row.find('textarea')

                $textAreas.each(function() {
                    var id = $(this).attr('id');
                    tinyMCE.remove("#" + id);
                });

                $row.remove();
            })
            .on('click', '.disableInputs', function() {
                if ($(this).is(':checked'))
                    $(this).closest('.form-group').find('.form-control').attr('disabled', true);
                else $(this).closest('.form-group').find('.form-control').attr('disabled', false);
            });

        var multyFormTabs = $('#multyFormTabs a'),
            multyFormTabsContents = $('#multyFormTabsContents > div');

        multyFormTabs
            .on('shown.bs.tab', function(event) {
                var carrentTabIndex = multyFormTabs.index($(event.target)),
                    previousTabIndex = multyFormTabs.index($(event.relatedTarget));

                $(event.target).addClass('filled');

                if (carrentTabIndex > previousTabIndex) $(event.relatedTarget).addClass('filled');
                // else $(event.relatedTarget).removeClass('filled');
            });

        $('.change-tab').on('click', function(event) {
            event.preventDefault();

            var $this = $(this),
                dir = Boolean($this.data('dir')),
                validationRequired = Boolean($this.data('validation-required')),
                $relTabContent = $this.closest('.tab-pane'),
                isValid = true,
                $form = $(this).closest('form');


            if (validationRequired) {
                var bootstrapValidator = $form.data('bootstrapValidator');

                bootstrapValidator.validate();

                var isValid = bootstrapValidator.isValid();
            } else {
                isValid = true;
            }


            if (validationRequired && !isValid) return;

            if ((validationRequired && isValid) || !validationRequired) {

                var index = multyFormTabsContents.index($relTabContent);

                if (dir) {
                    index++;
                    if (validationRequired) $relTabContent.find('form').attr('data-form-filled', true);
                } else {
                    index--;
                    $relTabContent.find('form').attr('data-form-filled', false);
                };

                if (index >= 0 && index < multyFormTabsContents.length) {
                    multyFormTabs.eq(index)
                        .tab('show');
                }
            }
        });

        $('.showPreview').on('click', function(event) {
            event.preventDefault();

            var validationRequired = Boolean($(this).data('validation-required')),
                $form = $(this).closest('form'),
                $relTabContent = $(this).closest('.tab-pane');

            if (validationRequired) {
                var bootstrapValidator = $form.data('bootstrapValidator');

                bootstrapValidator.validate();

                var isValid = bootstrapValidator.isValid();
            } else {
                isValid = true;
            }

            if (validationRequired && !isValid) return;

            if ((validationRequired && isValid) || !validationRequired) {
                $relTabContent.find('form').attr('data-form-filled', true);

                var $forms = $('[data-form-filled="true"]');
                var formData = {};

                $forms.each(function() {
                    var $form = $(this).serializeArray(),
                        formaArray = {},
                        key = $(this).data('form-key');

                    $.each($form, function() {
                        formaArray[this.name] = this.value;
                    });

                    formData[key] = formaArray;
                });

                $.ajax({
                    url: window.url_generate_pdf,
                    type: "POST",
                    data: {
                        data: formData
                    },
                    dataType: 'json',
                    success: function(data, textStatus, jqXHR) {

                        if (data.error) {
                            $.each(data.error, function(page, value) {
                                $targetTabset = $("#multyFormTabs"),
                                    $targetTab = $targetTabset.find('[href="' + page + '"]'),
                                    $targetTabContent = $(page);
                                // console.log($targetTabset);
                                $('#resumeConstructor, #resumePreview').toggle();
                                $targetTabContent.addClass('inReeddit').find('.replaceLink').detach().remove();
                                $targetTab.tab('show');
                                return;
                            });
                        }
                        if (data.status == 'ok') {
                            //$("#resumePreviewEmbed").attr('data', data.pdf);
                            $("#resumePreviewEmbed").attr('src', data.preview);
                            $("#btn-get-resume-pdf").data('pdf', data.pdf);
                        }
                    }
                });

                $('#resumeConstructor, #resumePreview').toggle();
            }
        });

        $('#btn-get-resume-pdf').on('click', function(event) {
            event.preventDefault();

            var $self = $(this);
            var $url = $self.data('pdf');

            if ($('#i-want-subscribe').is(':checked'))
                $url = $url + '?subscribe=true';

            $.ajax({
                url: $url,
                cache: false,
                dataType: 'json',
                type: "GET",
                beforeSend: function(XMLHttpRequest) {
                    $self.button('loading');
                },
                complete: function(XMLHttpRequest, textStatus) {
                    $self.button('reset');
                },
                success: function(data, textStatus) {
                    if (data.status == 'ok') {
                        window.location = $self.data('pdf');
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert('Не удалось выполнить запрос. Возможно сайт временно не доступен или у вас проблемы с интернетом.');
                }
            });


        });

        $('.goTo').on('click', function(event) {
            event.preventDefault();

            var $this = $(this),
                $target = $($this.attr('href'));

            if ($target) {
                var targetsTop = $target.offset().top;

                $('html, body').animate({
                    scrollTop: targetsTop
                }, 700);
            }
        });

        $('.goToTab').on('click', function(event) {
            event.preventDefault();

            var $this = $(this),
                $targetTabset = $($this.data('targe-tabset')),
                $targetTab = $targetTabset.find('[href="' + $this.data('target-tab') + '"]'),
                $targetTabContent = $($this.data('target-tab'));

            $('#resumeConstructor, #resumePreview').toggle();
            $targetTabContent.addClass('inReeddit').find('.replaceLink').detach().remove();
            $targetTab.tab('show');
        });

        $('.goToTab_').on('click', function(event) {
            event.preventDefault();

            var $this = $(this),
                $target = $('[href="' + $this.data('tab-target') + '"]');

            $target.tab('show');
        });

        $('.tabs-replacer').each(function() {
            var $links = $(this).find('ul a'),
                $target = $($(this).attr('data-target-tabset')),
                $tabs = $target.find('a'),
                $topLink = $(this).find('> a .lab');

            $links.click(function(event) {
                event.preventDefault();

                var $this = $(this),
                    index = $links.index($this);

                $links.parent().removeClass('active');
                $this.parent().addClass('active');
                $topLink.text($this.text());

                $tabs.eq(index).tab('show');
            });
        });

        $('[data-toggle="collapse"]').on('click', function(event) {
            event.preventDefault();
        });

        $('#moreText, #moreText2, .moreText').on('show.bs.collapse hide.bs.collapse', toggleCollapseLinkText);
        // $('#moreText2').on('show.bs.collapse hide.bs.collapse', toggleCollapseLinkText);

        var isAdvancedUpload = function() {
            var div = document.createElement('div');
            return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
        }();

        $('.uploadOnDrop').each(function() {
            var $form = $(this);
            var $input = $form.find('[type="file"]');

            $input.on('change', function(event) {
                $(this).parent().addClass('file-droped');
                if (undefined != $input[0]) {
                    $(".label-content-afterdrop").html($input[0].value);
                }
            });

            if (isAdvancedUpload) {
                var droppedFiles = false;

                $form.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                    })
                    .on('dragover dragenter', function() {
                        $form.addClass('is-dragover');
                    })
                    .on('dragleave dragend drop', function() {
                        $form.removeClass('is-dragover');
                    })
                    .on('drop', function(e) {
                        droppedFiles = e.originalEvent.dataTransfer.files;

                        if (droppedFiles) {
                            $form.closest('form')
                                .bootstrapValidator('resetField', $input)
                                .bootstrapValidator('removeField', $input);
                        }

                        $form
                            .data('droppedFiles', droppedFiles)
                            .addClass('file-droped');
                    });
            }
        });

        $('.btn-submit').on('click', function() {
            var $this = $(this);
            var $form = $this.parents('form');
            var bootstrapValidator = $(this).parents('form').data('bootstrapValidator');
            bootstrapValidator.validate();

            // console.log(grecaptcha);
            // if (!bootstrapValidator.isValid() || !grecaptcha.getResponse()) return false;

            if (!bootstrapValidator.isValid()) return false;

            window.recaptchaForm = $form[0];

            /*if($form.attr("id") == 'callback'){
		    	var ajaxData = $form.serialize();
		    }else{
			    var ajaxData 				= new FormData($form.get(0));
			    var $uploadOnDrop  	= $form.find('.uploadOnDrop');
			    var $input 					= $uploadOnDrop.find('[type="file"]');
			    if(isAdvancedUpload && $uploadOnDrop.length > 0){
			    	if($uploadOnDrop.data('droppedFiles')){
			    		$.each($uploadOnDrop.data('droppedFiles'), function(i, file){
					      ajaxData.append($input.attr('name'), file);
					    });
			    	}
			    }
		    }*/

            /*var onSubmit = function(recaptchaToken) {
			    $.ajax({
				    url: $form.attr('action'),
				    type: "POST",
				    data: ajaxData,
				    dataType: 'json',
				    cache: false,
				    contentType: false,
				    processData: false,
				    beforeSend: function (XMLHttpRequest) {
				    	$this.button('loading');
				    },
				    complete: function (XMLHttpRequest, textStatus) {
				    	$this.button('reset');
				    	console.log(XMLHttpRequest, textStatus);
				    },		    
				    success: function(data){
				      console.log(data);
				      
				      if(data.status == 'ok'){
				      	
				        grecaptcha.reset();
				     
			      		var $callbackModalForm2 = $("#successFullmesageForm");
			      		
			      		// if($modalToogables.length == 0){ if($callbackModalForm2.length > 0) $callbackModalForm2.modal('show');  }
				   

				      	// $('#callbackModalForm').toggle();
				      	var $modalToogables = $form.closest('.modal').find('.modal-toogable');
				      	var $formToogables = $form.find('.form-toogable');

				      	$('#callbackModal').hide();
				      	$('#callbackModalApplicants').hide();

				      	if($modalToogables.length > 0) $modalToogables.toggle();
				      	if($formToogables.length > 0) $formToogables.toggle();

				      	
				      	$form.data('bootstrapValidator').resetForm(true);

				      	var $inputs  = $form.find('input, textarea');

				      	if($inputs.length > 0){
									$inputs.each(function(){
										var $this = $(this);
										
										$this.val('');
									});
								}

								$uploadOnDrop = $form.find('.uploadOnDrop');

								if($uploadOnDrop.length > 0){
									$uploadOnDrop.removeClass('file-droped');
									$uploadOnDrop.removeData('droppedFiles');
								}

						if($this.closest('.modal').data('subscribe-once')){
							setCookie("userSubscribed", 1, "Mon, 07-Dec-2020 00:00:00 GMT", "/");
							$('#initialSubscribeBlock').remove();
							$('#subscribeModal').data('form-sent', true);
						}

						dataLayer.push({'event': 'UAEvent', 'eventCategory' : 'success', 'eventAction' : $this.data('goal')});
						// ga('send', 'event', 'success', $this.data('goal'));
						yaCounter41592039.reachGoal( $this.data('goal') );

						if ( $this.hasClass('btn-success') ) {

							window.location.assign(data.url);
						} 
					
						setCookie("successFeedback", 1, "Mon, 07-Dec-2020 00:00:00 GMT", "/");

				      }
				      if(data.status == 'error'){
				      	console.log(data.field);
				      	field = data.field;
				      	$.each( field, function( key, value ) {
		  					//alert( key + ": " + value );
		  					error= value.error;
						});
				      	alert(error);
				      }

				    },
				    error: function() {
				      // Log the error, show an alert, whatever works for you
				      alert('Не удалось выполнить запрос. Возможно сайт временно не доступен или у вас проблемы с интернетом.');
				    }
				  });
			  };*/
        });

        if ($('#map-container').length > 0) {
            var contactsPageMap = new google.maps.Map(document.getElementById('map-container'), {
                    zoom: 17,
                    center: {
                        lat: 0,
                        lng: 0
                    }
                }),
                $tabs = $('#cities-tabset a'),
                $initTab = $tabs.filter('.initial').eq(0),
                title = $initTab.data('map-title'),
                center = $initTab.data('map-center'),
                // container 	= $initTab.data('map-container'),
                zoom = $initTab.data('map-zoom');

            contactsPageMap.setCenter({
                lat: center[0],
                lng: center[1]
            });
            contactsPageMap.setZoom(zoom);
            google.maps.event.trigger(contactsPageMap, 'resize');

            $tabs.each(function() {
                var $this = $(this),
                    title = $this.data('map-title'),
                    center = $this.data('map-center'),
                    zoom = $this.data('map-zoom');

                new google.maps.Marker({
                    position: {
                        lat: center[0],
                        lng: center[1]
                    },
                    map: contactsPageMap
                });

                $this.on('shown.bs.tab', function() {
                    contactsPageMap.setCenter({
                        lat: center[0],
                        lng: center[1]
                    });
                    contactsPageMap.setZoom(zoom);
                    google.maps.event.trigger(contactsPageMap, 'resize');
                });

            });
        }

        //-------------Maps--------------//
        // if(typeof ymaps != "undefined"){
        // 	ymaps.ready(init);

        //   function init(){
        //   	var $tabs 		= $('#cities-tabset a'),
        //   		$initTab	= $tabs.filter('.initial'),
        //   		title 		= $initTab.data('map-title'),
        //   		center 		= $initTab.data('map-center'),
        //   		container 	= $initTab.data('map-container'),
        //   		zoom 	= $initTab.data('map-zoom');

        //       var myMap = new ymaps.Map(container, {
        //           center: center,
        //           zoom: zoom
        //       });

        //       $tabs.each(function(){
        //       	var $this 		= $(this),
        //       		title 		= $this.data('map-title'),
        //   			center 		= $this.data('map-center'),
        //       		myPlacemark = new ymaps.Placemark(center, { hintContent: title}),
        //       		zoom 	    = $this.data('map-zoom');

        //       	myMap.geoObjects.add(myPlacemark);

        //       	$this.on('shown.bs.tab', function(){
        //       		myMap.setCenter(center);
        //       		myMap.setZoom(zoom);
        //       	});

        //       });
        //   }
        // }

        /*$('[name="phone"]').inputmask({"mask": "+38 (999) 999-99-99"});
        $('#work-with-us-phone-modal').inputmask({"mask": "+38 (999) 999-99-99"});
        $('[name="request_callbmod[phone]"]').inputmask({"mask": "+38 (999) 999-99-99"});*/

        $('.g-recaptcha').on('click', function(e) {
            $('body').addClass('recaptcha-block-img');
            e.stopPropagation();
        });

        //----------Валидация полей----------
        $('.form-validate').each(function() {
            this.addEventListener('grecaptchaFrom', function(event) {
                let $form = $(event.target);
                let $btn = $form.find('.btn-submit');

                if ($form.attr("id") == 'callback') {
                    var ajaxData = $form.serialize();
                } else {
                    var ajaxData = new FormData($form.get(0));
                    var $uploadOnDrop = $form.find('.uploadOnDrop');
                    var $input = $uploadOnDrop.find('[type="file"]');
                    if (isAdvancedUpload && $uploadOnDrop.length > 0) {
                        if ($uploadOnDrop.data('droppedFiles')) {
                            $.each($uploadOnDrop.data('droppedFiles'), function(i, file) {
                                ajaxData.append($input.attr('name'), file);
                            });
                        }
                    }
                }

                $.ajax({
                    url: $form.attr('action'),
                    type: "POST",
                    data: ajaxData,
                    dataType: 'json',
                    cache: false,
                    contentType: false,
                    processData: false,
                    beforeSend: function(XMLHttpRequest) {
                        $btn.button('loading');
                    },
                    complete: function(XMLHttpRequest, textStatus) {
                        $btn.button('reset');
                        console.log(XMLHttpRequest, textStatus);
                    },
                    success: function(data) {
                        console.log(data);

                        if (data.status == 'ok') {

                            grecaptcha.reset();

                            var $callbackModalForm2 = $("#successFullmesageForm");

                            // if($modalToogables.length == 0){ if($callbackModalForm2.length > 0) $callbackModalForm2.modal('show');  }


                            // $('#callbackModalForm').toggle();
                            var $modalToogables = $form.closest('.modal').find('.modal-toogable');
                            var $formToogables = $form.find('.form-toogable');

                            $('#callbackModal').hide();
                            $('#callbackModalApplicants').hide();

                            if ($modalToogables.length > 0) $modalToogables.toggle();
                            if ($formToogables.length > 0) $formToogables.toggle();


                            $form.data('bootstrapValidator').resetForm(true);

                            var $inputs = $form.find('input, textarea');

                            if ($inputs.length > 0) {
                                $inputs.each(function() {
                                    var $this = $(this);

                                    $this.val('');
                                });
                            }

                            $uploadOnDrop = $form.find('.uploadOnDrop');

                            if ($uploadOnDrop.length > 0) {
                                $uploadOnDrop.removeClass('file-droped');
                                $uploadOnDrop.removeData('droppedFiles');
                            }

                            if ($btn.closest('.modal').data('subscribe-once')) {
                                setCookie("userSubscribed", 1, "Mon, 07-Dec-2020 00:00:00 GMT", "/");
                                $('#initialSubscribeBlock').remove();
                                $('#subscribeModal').data('form-sent', true);
                            }

                            dataLayer.push({
                                'event': 'UAEvent',
                                'eventCategory': 'success',
                                'eventAction': $btn.data('goal')
                            });
                            // ga('send', 'event', 'success', $this.data('goal'));
                            yaCounter41592039.reachGoal($btn.data('goal'));

                            if ($btn.hasClass('btn-success')) {

                                window.location.assign(data.url);
                            }

                            setCookie("successFeedback", 1, "Mon, 07-Dec-2020 00:00:00 GMT", "/");

                        }
                        if (data.status == 'error') {
                            console.log(data.field);
                            field = data.field;
                            $.each(field, function(key, value) {
                                //alert( key + ": " + value );
                                error = value.error;
                            });
                            alert(error);
                        }

                    },
                    error: function() {
                        // Log the error, show an alert, whatever works for you
                        alert('Не удалось выполнить запрос. Возможно сайт временно не доступен или у вас проблемы с интернетом.');
                    }
                });
            });
        });

        $('.form-validate').bootstrapValidator({
            feedbackIcons: {
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            },
            icon: {
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            },
            live: 'disabled',
            excluded: [':disabled'],
            fields: {
                file: {
                    validators: {
                        notEmpty: {
                            message: 'Прикрепите резюме'
                        }
                    }
                },
                /*message: {
                	validators: {
                		notEmpty:{
                			message: 'Введите Ваше сообщение'
                		}
                	}
                },*/
                name: {
                    validators: {
                        notEmpty: {
                            message: 'Введите ваше имя'
                        }
                    }
                },
                'categories-list': {
                    validators: {
                        numeric: {
                            message: 'Выбирите значение из списка'
                        }
                    }
                },
                'cities-list': {
                    validators: {
                        numeric: {
                            message: 'Выбирите значение из списка'
                        }
                    }
                },
                company: {
                    validators: {
                        notEmpty: {
                            message: 'Введите название компании'
                        }
                    }
                },
                lastname: {
                    validators: {
                        notEmpty: {
                            message: 'Введите вашу фамилию'
                        }
                    }
                },
                phone: {
                    validators: {
                        notEmpty: {
                            message: 'Введите ваш номер'
                        },
                        regexp: {
                            message: 'Телефон введен не правильно',
                            regexp: /^[0-9\s\-()+\.]+$/
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Введите ваш email'
                        },
                        emailAddress: {
                            message: 'Email введен не правильно'
                        }
                    }
                },
                number: {
                    validators: {
                        notEmpty: {
                            message: 'Это поле обязательное для заполнения'
                        },
                        regexp: {
                            message: 'Можно ввести только цифры',
                            regexp: /^[0-9\s\-()+\.]+$/
                        }
                    }
                },
                'request_callbmod[phone]': {
                    validators: {
                        notEmpty: {
                            message: 'Введите ваш номер'
                        },
                        regexp: {
                            message: 'Телефон введен не правильно',
                            regexp: /^[0-9\s\-()+\.]+$/
                        }
                    }
                },
                'request_callbmod[company]': {
                    validators: {
                        notEmpty: {
                            message: 'Введите название компании'
                        }
                    }
                },
                'request_callbmod[name]': {
                    validators: {
                        notEmpty: {
                            message: 'Введите ваше имя'
                        }
                    }
                },
                'request_callbmod[email]': {
                    validators: {
                        notEmpty: {
                            message: 'Введите ваш email'
                        },
                        emailAddress: {
                            message: 'Email введен не правильно'
                        }
                    }
                },
            }
        });


        $('a.disabled').on('click', function() {
            return false;
        });
    });

    // Fancy box initialization
    $('.img-docs-carousel a').fancybox();

    if ($.fn.fancybox) $(".fancybox").fancybox();

    // Grid rotator initialization
    if ($.fn.gridrotator) $('#ri-grid').gridrotator({
        step: 'random',
        maxStep: 3,
        animType: 'fadeInOut',
        interval: 3500,
        animSpeed: 1200,
        animEasingOut: 'ease',
        animEasingIn: 'ease',
        rows: 3,
        columns: 2,
        w1024: {
            rows: 3,
            columns: 2
        },
        w768: {
            rows: 3,
            columns: 2
        },
        w480: {
            rows: 3,
            columns: 2
        },
        w320: {
            rows: 3,
            columns: 2
        },
        w240: {
            rows: 3,
            columns: 2
        },
    });

    $(window).load(function() {
        if ($.fn.twentytwenty) $(".before-after-slider").twentytwenty();
    });

    $('#ourCharges').on('gotVisible', function() {
        var $this = $(this);
        setTimeout(function() {
            $this.addClass('vis');
        }, 600);
    });

    $('#pieChartContainer, .before-after-slider, #ourCharges').each(function() {
        var $target = $(this),
            targetTop = $target.offset().top;

        $(window).on('load scroll resize', function() {
            showChart($target, targetTop);
        });
    });

    function showChart($target, targetTop) {
        var $window = $(this);

        if ($target.length > 0) {
            var scrollTop = $window.scrollTop(),
                offset = parseInt(targetTop - $window.height() + parseInt($target.height() / 4)) - 200;

            if (scrollTop >= offset) {
                if (!$target.hasClass('in')) {
                    $target
                        .addClass('in')
                        .trigger('gotVisible');
                }
            }
        }
    }

    function toggleCollapseLinkText(event) {
        var $this = $(this),
            $trigeredBy = $('[data-target="#' + $this.attr('id') + '"]'),
            altText = $trigeredBy.attr('data-alt-text'),
            text = $trigeredBy.text();

        $trigeredBy
            .attr('data-alt-text', text)
            .find('.val')
            .text(altText);
    }

    function integerDivision(x, y) {
        return (x - x % y) / y
    }

    // Top Menu adjustments
    /*function adjustMenu(){
    	var $container 					= $('#mainMenu'),
    			$allLinks 					= $container.find('> ul > li'),
    			$linksToFlowOut 		= $allLinks.not('#addHere'),
    			$flowInto 					= $container.find('#addHere > ul'),
    			containerWidth  		= $container.width(),
    			linksTotalWidth 		= 0;

    	$allLinks.each(function(){
    		linksTotalWidth += $(this).width();
    	});

    	if(linksTotalWidth > containerWidth){
    		var linkToRemove = $linksToFlowOut.last();

    		$flowInto.append(linkToRemove[0].outerHTML);
    		linkToRemove.remove();
    		adjustMenu();
    	}

    	if(containerWidth - linksTotalWidth > $('#addHere > ul > li').last().width() + 4){
    		var linkToRemove = $('#addHere > ul > li').last();

    		$('#addHere').before(linkToRemove[0].outerHTML);
    		linkToRemove.remove();
    		adjustMenu();
    	}
    }

    $(window).on('resize load orientationchange', function(){
    	if($(this).width() >767) adjustMenu();
    });*/

    //----------MOBILE NAVIGATION----------
    $('.btn-navigation').on('click', function() {
        $('.mobile-navigation').toggleClass('visible');
        $('.btn-navigation').toggleClass('animations');
        $('.mobile-navigation .sub-menu').removeClass('visible');
    });

    $('.sub-menu-link > a').on('click', function(event) {
        event.preventDefault();
        $(this).parents('li').find('.sub-menu').addClass('visible');
    });

    $('.sub-menu .back-menu').click(function() {
        $(this).parents('.sub-menu').removeClass('visible');
    });

    $("#mainMenu .dropdown").hover(
            function() {
                $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");
            },
            function() {
                $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");
            })
        .off('click');

    //----------VISIBLE MOBILE SLIDER----------
    if ($.fn.bxSlider) {
        $('.bxslider-docs').bxSlider();
        $('.slider-how-we-work').bxSlider({
            controls: false
        });
        $('.slider-services').bxSlider({
            controls: false
        });

    }

    $('.filters .dropdown .dropdown-menu li a').on('click', function(e) {
        e.preventDefault();

        $(this).parents('.dropdown-menu').find('li.active').removeClass('active');
        $(this).parent().addClass('active');
        $(this).parents('.dropdown').find('.btn-select-like').text($(this).text());

        setCookie($(this).data('param'), $(this).data('id'));

        var $self = $(this);

        var data = {};

        $(this).parents('.filters').find('.dropdown-menu li.active').each(function() {
            data[$(this).find('a').data('param')] = $(this).find('a').data('id');
        });

        //----------Отправка Ajax запроса----------
        $.ajax({
            url: $self.parents('.filters').data('url'),
            data: data,
            cache: false,
            dataType: 'json',
            type: "POST",
            success: function(data, textStatus) {
                if (data.status == 'ok') {
                    $('.vacancies-list-wrapper').html(data.html);
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert('Не удалось выполнить запрос. Возможно сайт временно не доступен или у вас проблемы с интернетом.');
            }
        });
    });

    var player;

    $('#video-modal').on('show.bs.modal', function(e) {

        player = new YT.Player('box-player-id', {
            height: '488',
            width: '100%',
            videoId: $(this).data('videoId'),
            playerVars: {
                rel: 0,
                showinfo: 0,
                modestbranding: 1
            },
            events: {
                'onReady': function(event) {
                    event.target.playVideo();
                }
            }
        });

    });

    $('#video-modal').on('hide.bs.modal', function(e) {
        player.destroy();
    });


    $('#sendResumeModal').on('show.bs.modal', function(event) {
        var $btn = $(event.relatedTarget);
        var $obj_category_id = $(this).find('#work-with-us-category-id-modal-1');
        var $obj_vacancy_id = $(this).find('#request_callbmod_vacancy_id');


        if ($btn.data('category-id')) {
            $obj_category_id.val($btn.data('category-id')).parent().hide();
        } else {
            $obj_category_id.val('').parent().show();
        }

        if ($btn.data('vacancy-id')) {
            $obj_vacancy_id.val($btn.data('vacancy-id'));
            $obj_category_id.parent().hide();
        }

    });

    $('.fake-form')
        .bootstrapValidator({
            feedbackIcons: {
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            },
            icon: {
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            },
            live: 'disabled',
            excluded: [':disabled'],
            fields: {
                'email': {
                    validators: {
                        notEmpty: {
                            message: 'Введите ваш email'
                        },
                        emailAddress: {
                            message: 'Email введен не правильно'
                        }
                    }
                },
            }
        })
        .on('click', '.btn-submit_', function(event) {
            event.preventDefault();

            var $form = $(event.target).closest('form'),
                $modal = $('#subscribeModal'),
                email = $form.find('[name="email"]').val(),
                $emailInput = $modal.find('#subscribe-modal-email'),
                bootstrapValidator = $form.data('bootstrapValidator');

            bootstrapValidator.validate();
            var isValid = bootstrapValidator.isValid();

            if (isValid) {
                $emailInput.val(email);
                $modal.modal('show');
                bootstrapValidator.resetForm(true);
            }
        });

    QueryString = function() {
        // This function is anonymous, is executed immediately and 
        // the return value is assigned to QueryString!
        var query_string = {};
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(pair[1]);
                // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
                query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string;
    }

    var qs = QueryString();

    if (qs.openapplicateform && qs.openapplicateform == 1) {
        var $modal = $('#sendResumeModal');

        if ($modal.length > 0) $modal.modal('show');
    }

})(jQuery)