
var Card = function(options) {
  this.x = options.x;
  this.y = options.y;
  this.suit = options.suit;
  this.number = options.number;
  this.value = options.value;
  this.offset = options.offset;
  this.imageSrc = "../images/" + this.suit + this.number + ".png";
  this.ctx = options.ctx;
};

Card.prototype.create = function () {
  var xPos = this.x;
  var yPos = this.y;
  var image = this.imageSrc;
  cardImage = new Image();
  cardImage.src = image;
  ctx.drawImage(cardImage, xPos, yPos, 100, 200);
};











module.exports = Card;
