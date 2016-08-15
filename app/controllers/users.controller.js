module.exports = {
  index: function(req, res){
    res.json(
      {
       name: 'Christopher Ong',
       job: 'Web Development Immersive (WDI 4) Student',
       age: 56,
       maritalStatus: 'married',
       hobby: ['play jigsaw puzzles',
               'reading',
               'listen to music',
               'singing',
               'jogging',
               'basketball'],
       email: 'chrisongts@gmail.com',
       mobile: '+65 9822 3551',
       school: 'General Assembly (GA)',
       schoolAbbr: 'GA'
     });
  }

}
