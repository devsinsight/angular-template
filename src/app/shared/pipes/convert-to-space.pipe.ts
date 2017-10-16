import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'convertToSpace'
})
export class ConvertToSpacesPipe implements PipeTransform
{
    transform(value: any, character: string) {
        return value.replace(character, ' ')
    }

}