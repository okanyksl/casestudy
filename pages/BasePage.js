import { t } from 'testcafe';
import env from 'dotenv';

env.config();

class BasePage {
    constructor() {
        this.url = process.env.WEBSITE;
    }

    // eslint-disable-next-line class-methods-use-this
    async waitFor(milliSeconds) {
        await t.wait(milliSeconds);
    }

    // eslint-disable-next-line class-methods-use-this
    async testSpeed(speedLevel) {
        await t.setTestSpeed(speedLevel);
    }
}

export default BasePage;