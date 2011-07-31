function Site(url)
{
	this.protocol = url.protocol;
	this.domain = url.domain;
	
	this.requests = new HitList();
	this.requested_by = new HitList();
}

Site.prototype.toString = function()
{
	return this.domain;
}