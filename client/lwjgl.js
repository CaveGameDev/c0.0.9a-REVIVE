var r = await fetch("/natives/liblwjgl.so");
var buf = await r.arrayBuffer();
export default
{
	wasmModule: buf
}
