function solve(args){
var list=args.splice(0);

for (var i=0;i<list.length;i+=1){
	list[i] = list[i].replace(/  +/g, ' ');
	for(var j=0;j<list[i].length;j+=1){
		console.log(list[i]);
	}

}
}

var args=[
'(            def                 func 10)',
'(def newFunc (+   func                     2))',
'(def                   sumFunc (+ func func              newFunc 0 0 0))',
'(* sumFunc 2)'];

console.log(solve(args));