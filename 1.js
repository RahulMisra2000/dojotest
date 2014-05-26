	
require(["dojo/parser", "dijit/registry", "dojo/on","dijit/form/Textarea", "dijit/form/TextBox", "dojo/domReady!"],
        function(parser, registry, on, uu){
            
var strval = "Tylenol 50mg 3x/day \r\nAllergies no-known allergy \r\naside-effects slight dizziness";
            
var strval1 = "Tylenol 50mg 3x/day \r\nAllergies no-known allergy \r\naside-effects slight dizziness";
            
    parser.parse();
    var box0 = registry.byId("value0Box");
    var box1 = registry.byId("value1Box");
    box1.set("value", strval);
    on(box0, "change", function(){
         box1.set("value", box0.get("value") + " modified");
    });
            
        var textarea = new uu({
            name: "myarea",
            value: strval,
            style: "width:400px;"
        }, "myarea");
        
        var ta = registry.byId("myarea");
            setTimeout(function(){
            alert(ta.get('value'));
            console.dir(ta);
            }, 3000);
            
});