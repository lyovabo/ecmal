import {Command} from './command';
import {Option} from './command';
import {Cli} from "./command";

import {Project} from "../models/project";


@Command({
    title  : 'Install Package',
    args   : '<package,...>',
    usage  : [`
    Usage :
    |  espm publish [options] alias=registry:project@version
    |
    Examples :
    |  espm install -s node=github:ecmal/node@4.5.0
    |  espm install npm:angular
    `]
})
export class Publish extends Cli {

    @Option({
        alias    : 'f',
        title    : 'Force to publish'
    })
    force:boolean;

    execute(path:string=this.cwd){
        Project.read(path).publish(this.force);
    }
}