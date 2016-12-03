using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Text;
using TypeScriptHTMLApp1.Model;

namespace TypeScriptHTMLApp1
{
    [ServiceContract(Namespace = "")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class Service1
    {
        // To use HTTP GET, add [WebGet] attribute. (Default ResponseFormat is WebMessageFormat.Json)
        // To create an operation that returns XML,
        //     add [WebGet(ResponseFormat=WebMessageFormat.Xml)],
        //     and include the following line in the operation body:
        //         WebOperationContext.Current.OutgoingResponse.ContentType = "text/xml";
        [OperationContract]
        public string GetData()
        {
            //AdventureWorks20143StoredProcedure dbContext = new AdventureWorks20143StoredProcedure();
            //List<SelectStoredProcedureChristian_Result> listSelectStoredProcedureChristian_Result = dbContext.SelectStoredProcedureChristian(2).ToList<SelectStoredProcedureChristian_Result>();
            //return Newtonsoft.Json.JsonConvert.SerializeObject(listSelectStoredProcedureChristian_Result.Take(5));
            AdventureWorks20143StoredProcedure dbContext = new AdventureWorks20143StoredProcedure();
            List<GetElements_Result> listGetElements_Result = dbContext.GetElements().ToList<GetElements_Result>();
            return Newtonsoft.Json.JsonConvert.SerializeObject(listGetElements_Result);
        }

        // Add more operations here and mark them with [OperationContract]
    }
}
