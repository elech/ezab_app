EZAB_APP.directive('editor', 
	['$parse', '$timeout', function($parse, $timeout){
		
		return {
			restrict: 'A',
			link: function(scope, elem, attrs){				
				var getter = $parse(attrs['ngModel'])
					, setter = getter.assign
					, initial = true
					, cm = CodeMirror.fromTextArea(elem[0], {
							lineNumbers: true,
							mode: 'javascript',
							showCursorWhenSelecting: true
						});
				cm.getDoc().setValue(getter(scope) || "");
				
				//if within a modal
				//refresh the codemirror
				if(scope.$modalInstance){
					scope.$modalInstance.opened.then(function(){
						$timeout(function(){
							cm.refresh();
						}, 0)
					})
				}

				//watches the code mirror editor and sets scope variables
				cm.on("change", function(cm, changeObj){
					scope.$apply(function(){
						setter(scope, cm.getDoc().getValue());
						scope[elem[0].form.getAttribute('name')].$setDirty();
					})
				});

			}
		}
	}])