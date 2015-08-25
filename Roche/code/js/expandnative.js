
// Augment JavaScript object/classes
var augment = function(receivingClass, givingClass) {
    /* only provide certain methods */
    if (arguments[2]) {
        for (var i=2, len=arguments.length; i<len; i++) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    /* provide all methods*/
    else {
        for (methodName in givingClass.prototype) {
            /* check to make sure the receiving class doesn't
               have a method of the same name as the one currently
               being processed */
            if (!receivingClass.prototype[methodName]) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}
/**************************************************/
augment(NodeList,Array,'forEach','filter','indexOf','map');


