$(document).ready(function() {
    var accessToken = 'IGQVJXSExoWlVKeC1FeXlVb0JBbEVkSmdvUkYxbVVOZAHVKWkVzc3pRNFZADOEJsc1hIT0R3aVFvTm9tWGZAIWVE0b1BNQXRGajlVM0h6ZAmh2czZAzcWxUbE0tWGVaLV9NbUNRbzlXT0JB';
    
    $.ajax({
      url: 'https://graph.instagram.com/me/media?fields=id,media_url,thumbnail_url,permalink&access_token='+accessToken,
      dataType: 'json',
      type: 'GET',
  
      success: function(json) {
        $.each(json.data, function(i, v) {
          if (i == 12) {
            return false;
          }
          if (v.thumbnail_url){
            var media = v.thumbnail_url;
          } else {
            var media = v.media_url;
          }
          
          $('#instagram-feed').append(
            '<div class="col-6 col-md-3 instagram-single">'+
              '<div class="w-100 h-100 bg-gray">'+
                 '<a href="'+v.permalink+'" target="_blank" class="w-100 h-100 d-flex justify-content-center align-items-center">'+
                    '<div class="caption text-center">'+
                      '<i class="fab fa-instagram"></i>'+
                      '<span class="d-block">Instagram</span>'+
                    '</div>'+
                    '<div class="instagram-image w-100 h-100" style="background-image:url('+media+');"></div>'+
                 '</a>'+
              '</div>'+
            '</div>'
          );
        });
      },

      error: function(xhr, status, errorThrown) {

        $('#content').append(
            '<div class="col-12 blog-error text-center white">' +
              '<p>The API Token has expired. Please refresh your long-lived access token.</p>'+
              '<a class="btn read-more" href="">See Our Blog</a>' +
            "</div>"
        );

      }
    });
}); 