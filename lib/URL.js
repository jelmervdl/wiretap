function URL(url)
{
	this.parse(url);
}

URL.prototype.pattern = /^([^:]+):\/\/([^\/]+)\/?/;

URL.prototype.domainPattern = /([^.]+\.[^.]+)$/;

URL.prototype.parse = function(url)
{
	if (!(m = url.match(this.pattern)))
		return false;
	
	this.url = url;
	this.protocol = m[1];
	this.hostname = m[2];
	
	if (m = this.hostname.match(this.domainPattern))
		this.domain = m[1];
	else
		this.domain = this.hostname;
}
