var showSuccessFlag=function(a){require(["aui/flag"],function(b){b({type:"success",title:"Property Plugin",close:"auto",body:a})})},showErrorFlag=function(a){require(["aui/flag"],function(b){b({type:"error",title:"Property Plugin",close:"auto",body:a})})};
AJS.toInit(function(){console.log("Property Plugin initializing ...");console.log("AJS.params.baseURL\x3d"+AJS.params.baseURL);var a=AJS.$("#projectId").val(),b=AJS.params.baseURL+"/rest/ppmgmt/1.0/property/"+a+"/getAll/";a=AJS.params.baseURL+"/rest/ppmgmt/1.0/property/"+a+"/self";console.log("allUrl\x3d"+b);console.log("selfUrl\x3d"+a);AJS.TableProperty={};AJS.TableProperty.table=new AJS.RestfulTable({el:jQuery("#project-property-table"),autoFocus:!0,resources:{all:b,self:a},columns:[{id:"pKey",
header:"Property Key"},{id:"pValue",header:"Property Value"}]});console.log("Table binding ...");AJS.$(document).bind(AJS.RestfulTable.Events.ROW_INITIALIZED,function(){AJS.TableProperty.table.$tbody.empty();AJS.TableProperty.table.fetchInitialResources()});AJS.$(document).bind(AJS.RestfulTable.Events.ROW_ADDED,function(){showSuccessFlag("New row is added ...");AJS.TableProperty.table.$tbody.empty();AJS.TableProperty.table.fetchInitialResources()});AJS.$(document).bind(AJS.RestfulTable.Events.ROW_REMOVED,
function(){showSuccessFlag("The row is deleted ...");AJS.TableProperty.table.$tbody.empty();AJS.TableProperty.table.fetchInitialResources()});AJS.$(document).bind(AJS.RestfulTable.Events.UPDATED,function(){showSuccessFlag("The row is updated ...");AJS.TableProperty.table.$tbody.empty();AJS.TableProperty.table.fetchInitialResources()});AJS.$(document).bind(AJS.RestfulTable.Events.SERVER_ERROR,function(){showErrorFlag("There is an Server Error !");AJS.TableProperty.table.$tbody.empty();AJS.TableProperty.table.fetchInitialResources()})});