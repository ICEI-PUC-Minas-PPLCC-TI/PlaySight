function setObject(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  function getObject(key) {
    var storage = window.localStorage,
        value = storage.getItem(key);
    return value && JSON.parse(value);
  }
  function clearStorage() {
    window.localStorage.clear();
  }
  
  function clearComment(){
    $('#txt1').val('');
    $('#namebox').val('');
    clearStorage();
  }
  
  function saveComment(){
    var cText = $('#txt1').val(),
        cName = $('#namebox').val(),
        cmtList = getObject('cmtlist3');
  
    if (cmtList){
      cmtList.push({name: cName, text: cText});
      setObject('cmtlist3', cmtList);
    }else{ 
      setObject('cmtlist3', [{name: cName, text: cText}]);
    }
  
    bindCmt();
  }
  
  function bindCmt(){
    var cmtListElement = $('#cmtlist3'),
        cmtList = getObject('cmtlist3');
  
    cmtListElement.empty();
    $.each(cmtList, function(i, k){
      cmtListElement.append( $('<p>'+ k.text +'</p>') );
    });
  }
  
  $(function(){
    bindCmt();
  });