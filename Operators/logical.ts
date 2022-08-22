export function and(tweedleDee: boolean, tweedleDum: boolean): string {
    let tweedleDoo = tweedleDee && tweedleDum;
    let tweedleDeeS: string = String(tweedleDee);
    let tweedleDumS: string = String(tweedleDum);
  let tweedle: string = tweedleDoo
                            ? tweedleDoo + ": Both statements are true."
                            : tweedleDee
//                                ? tweedleDeeS + " is true and " + tweedleDumS + " is false."
                                ? tweedleDoo + ": Only the first statement is true."
                                : tweedleDum
//                                    ? tweedleDumS + " is true and " + tweedleDeeS + " is false."
                                    ? tweedleDoo + ": Only the second statement is true."
                                    : tweedleDoo + ": Both statements are false."
    
    return tweedle
}


export function or(tthis: boolean, tthat: boolean): string {
let these = tthis || tthat
let these2: string = these
                    ? tthis
                        ? tthat
                            ? "True: Both statements are true."
                            :"True: The first statement is true."
                        : "True: The second statement is true."
                    : "False: Both of these statements are false."
    return these2
}


export function not(here: boolean): boolean {
let there = !(here)
return there
}