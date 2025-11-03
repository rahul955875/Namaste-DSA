function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let l1Sum = 0n;
  let l2Sum = 0n;
  let multi = 1n;
  while (l1) {
    l1Sum += BigInt(l1.val) * multi;
    multi *= 10n;
    l1 = l1.next;
  }
  multi = 1n;
  while (l2) {
    l2Sum += BigInt(l2.val) * multi;
    multi *= 10n;
    l2 = l2.next;
  }

  let sum = l1Sum + l2Sum;
  let newList = new ListNode();
  //   console.log(l1Sum.toLocaleString("fullwide", { useGrouping: false }));
  let curr = newList;
  //   console.log(sum.toLocaleString("fullwide", { useGrouping: false }));
  while (sum > 0n) {
    let rem = sum % 10n;
    curr.val = Number(rem);
    if (sum < 10n) {
      curr.next = null;
    } else {
      curr.next = new ListNode();
    }
    sum = sum / 10n;
    curr = curr.next;
  }
  return newList;
};
// const l1 = {
//   val: 2,
//   next: {
//     val: 4,
//     next: {
//       val: 3,
//       next: null,
//     },
//   },
// };

// const l2 = {
//   val: 5,
//   next: {
//     val: 6,
//     next: {
//       val: 4,
//       next: null,
//     },
//   },
// };

// [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
};
const l1 = {
  val: 1,
  next: {
    val: 0,
    next: {
      val: 0,
      next: {
        val: 0,
        next: {
          val: 0,
          next: {
            val: 0,
            next: {
              val: 0,
              next: {
                val: 0,
                next: {
                  val: 0,
                  next: {
                    val: 0,
                    next: {
                      val: 0,
                      next: {
                        val: 0,
                        next: {
                          val: 0,
                          next: {
                            val: 0,
                            next: {
                              val: 0,
                              next: {
                                val: 0,
                                next: {
                                  val: 0,
                                  next: {
                                    val: 0,
                                    next: {
                                      val: 0,
                                      next: {
                                        val: 0,
                                        next: {
                                          val: 0,
                                          next: {
                                            val: 0,
                                            next: {
                                              val: 0,
                                              next: {
                                                val: 0,
                                                next: {
                                                  val: 0,
                                                  next: {
                                                    val: 0,
                                                    next: {
                                                      val: 0,
                                                      next: {
                                                        val: 0,
                                                        next: {
                                                          val: 0,
                                                          next: {
                                                            val: 0,
                                                            next: {
                                                              val: 1,
                                                              next: null,
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

console.dir(addTwoNumbers(l1, l2), { depth: null });
