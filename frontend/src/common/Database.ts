import {InfluxDB, Point} from '@influxdata/influxdb-client'

class Database {
    private client: InfluxDB;

    constructor() {
        const token = 'jR4anK3rQPRQHpjdQ4J8etLbEk6x8hhq2lz5Iyi5mHKnAmUXVD79bZy6ZOhKTdJSeTns1R2jBvurl4dTITersg==';
        const url = 'http://localhost:8086';
        this.client = new InfluxDB({url, token});
    }

    async write(measurement: string, value: number): Promise<void> {
        const org = 'univaq';
        const bucket = 'avv';
        const writer = this.client.getWriteApi(org, bucket, 'ns')
        const point = new Point(measurement).intField('value', value);
        writer.writePoint(point);
        await writer.flush();
    }

}

export default Database;
