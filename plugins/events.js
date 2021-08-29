import EventEmitter from 'node:events';

const emitter   = new EventEmitter();

const on        = (ev, fn)  => emitter.on(ev, fn);
const emit      = (ev, data)=> emitter.emit(ev, data);

export default wgd => {
    wgd.set('on', on);
    wgd.set('emit', emit);
};