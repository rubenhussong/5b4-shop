import { Directive } from '@angular/core';

@Directive({
  selector: '[appRouteScrollState]'
})
export class RouteScrollStateDirective {

  constructor() { }

  // Returns true, if one of the passed rules is valid
  // e.g. if element should be hidden, in an area on the root page, input should be:
  // rules: [{url: "/", ...}] and if output is true, use it to hide the element
  static updatedState({
    actual = { url: "/", scrollY: window.scrollY },
    rules = [{ url: "*", minThreshold: Number.MIN_VALUE, maxThreshold: Number.MAX_VALUE }]
  }: {actual: any, rules: any}
  ): boolean {
    actual["url"] = this.checkedValue(actual["url"], "/")
    actual["scrollY"] = this.checkedValue(actual["scrollY"], window.scrollY)

    for (let rule of rules) {
      if (RouteScrollStateDirective.ruleIsValid({actual, rule})) return true
    }
    return false
  }

  private static ruleIsValid({
    actual = { url: "/",scrollY: window.scrollY },
    rule = { url: "*", minThreshold: Number.MIN_VALUE, maxThreshold: Number.MAX_VALUE }
  }: { actual: any, rule: any}
  ): boolean {
    rule["url"] = this.checkedValue(rule["url"], "*")
    rule["minThreshold"] = this.checkedValue(rule["minThreshold"], Number.MIN_VALUE)
    rule["maxThreshold"] = this.checkedValue(rule["maxThreshold"], Number.MAX_VALUE)
    
    return (rule.url === "*" || rule.url === actual.url) &&
    (actual.scrollY >= rule.minThreshold && actual.scrollY <= rule.maxThreshold)
  }

  private static checkedValue(a: any, v: any) {
    return a !== undefined ? a : v;
  }
}
