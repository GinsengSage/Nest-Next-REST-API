import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path";

@Module({
    imports: [
        TrackModule,
        ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static')}),
        FileModule,
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.xiob0.mongodb.net/music-app?retryWrites=true&w=majority')
    ]
})

export class AppModule {}
