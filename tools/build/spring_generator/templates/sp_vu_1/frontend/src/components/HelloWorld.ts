import {Component, Vue} from 'vue-property-decorator';
import WithRender from './hello-world.html';
import {Message} from './Message';
import axios from 'axios';

@Component
@WithRender
export default class HelloWorld extends Vue {
    public msg: string = 'Welcome to ${app.name} project';

    constructor() {
        super();
        this.loadFromServer();
    }

    private loadFromServer() {
        console.log('About fetching the Spring server message');
        axios.get<Message>('/api').then((res) => {
            console.log(res.data.text);
            this.msg = res.data.text;
        });
    }

}
