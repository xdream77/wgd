export default {
    get(prop){
        return this[prop];
    },
    set(prop, val){
        this[prop] = val;
        return this;
    },
    configure(plugin){
        plugin(this);
        return this;
    },
    freeze(obj){
        obj
            ? Object.freeze(obj)
            : Object.freeze(this);
        return this;
    },
    makeGlobal(name){
        name
            ? globalThis[name] = this
            : globalThis.wgd = this;
        return this;
    }
};