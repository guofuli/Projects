/*提取数字中的整数部分*/
Number.prototype.integer=function(){
	return Math[this<0?'ceil':'floor'](this);
}  