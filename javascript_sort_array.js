const reasons = [{t:'a', order: 2}, {t:'b', order:1}, {t:'z', order: 5}];
const compare = (a, b) => {
  if (a.order < b.order) return -1;
	if (a.order > b.order) return 1;
return 0;
  
}
reasons.sort( compare ); console.log(reasons)
