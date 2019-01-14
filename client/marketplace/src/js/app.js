App = {

  init: async function() {
    // Load pets.
    $.getJSON('../items.json', function(data) {
      var groceryRow = $('#groceryRow');
      var groceryTemplate = $('#groceryTemplate');

      for (i = 0; i < data.length; i ++) {
        groceryTemplate.find('img').attr('src', data[i].picture);
        groceryTemplate.find('.item-name').text(data[i].name);
        groceryTemplate.find('.btn-add').attr('data-id', data[i].id);

        groceryRow.append(groceryTemplate.html());
      }
    });
  },

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
