let url = $request.url;

url = url.replace('://czn.cdn.net.cn/', '://czn.cdn.net/');

url = url.replace(/:\/\/(.+)\.czn\.cdn\.net\.cn\//, '://$1.czn.cdn.net/');

$done({
  url: url
});
