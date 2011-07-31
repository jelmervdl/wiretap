function HitList()
{
	this.items = {}
}

HitList.prototype.push = function(item)
{
	if (item in this.items)
		this.items[item]++;
	else
		this.items[item] = 1;
}