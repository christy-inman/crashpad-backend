
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Christy Inman',
          email: 'christyinman@ymail.com',
          username: 'cinman',
          password: 'love',
          profile_pic: 'https://media1.popsugar-assets.com/files/thumbor/NiU8Gj-i_HbjlfUgXrRK_jW3MeM/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2018/01/10/765/n/43463692/12a22f695a564bb32c3379.99027066_edit_img_image_44490285_1515603002/i/PicsArt-POPSUGAR-Travel-Challenge-Winners.jpg',
          travel_pic: 'https://www.destinationsshow.com/sites/default/files/styles/header_carousel_image/public/header_carousel_images/luo-ping-506323-unsplash_new_0.jpg?itok=_gY0qudj',
          city: 'Denver',
          state: 'CO',
          phone_number: '3036543210'
        },
        {
          name: 'Frank Smith',
          email: 'franksmith@gmail.com',
          username: 'frank',
          password: 'joy',
          profile_pic: 'https://i.pinimg.com/originals/eb/e6/da/ebe6da57088281ba0f315cafab554ab8.png',
          travel_pic: 'https://render.fineartamerica.com/images/rendered/default/poster/8.000/5.375/break/images/artworkimages/medium/1/frank-sinatra-fly-me-to-the-moon-new-york-20170506-v4-wingsdomain-art-and-photography.jpg',
          city: 'New York',
          state: 'NY',
          phone_number: '2127654321'
        },
        
      ]);
    });
};
