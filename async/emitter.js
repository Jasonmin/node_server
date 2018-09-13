
// import EventEmitter from 'events';
const EventEmitter = require('events');


class MyStream extends EventEmitter {

    sendMsg() {
        this.emit('message');
    }

}

const st = new MyStream();
st.on('message', () => {
    console.log('received new message')
})

st.sendMsg();

