import { PartyCartItemEdge, PartyCartItemStatus } from './../../graphql/generated/types';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calculateEstimatedCost',
})
export class CalculateEstimatedCostPipe implements PipeTransform {
    transform(value: PartyCartItemEdge[], ...args: any[]): any {
        return value
            ? value.reduce((prev, curr: PartyCartItemEdge) => {
                  return (
                      (curr.node.status === PartyCartItemStatus.Accepted ? curr.node.price * curr.node.quantity : 0) +
                      prev
                  );
              }, 0) / 100
            : 0;
    }
}
