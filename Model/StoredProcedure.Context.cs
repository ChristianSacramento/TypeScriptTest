﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TypeScriptHTMLApp1.Model
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class AdventureWorks20143StoredProcedure : DbContext
    {
        public AdventureWorks20143StoredProcedure()
            : base("name=AdventureWorks20143StoredProcedure")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
    
        [DbFunction("AdventureWorks20143StoredProcedure", "ufnGetContactInformation")]
        public virtual IQueryable<ufnGetContactInformation_Result> ufnGetContactInformation(Nullable<int> personID)
        {
            var personIDParameter = personID.HasValue ?
                new ObjectParameter("PersonID", personID) :
                new ObjectParameter("PersonID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.CreateQuery<ufnGetContactInformation_Result>("[AdventureWorks20143StoredProcedure].[ufnGetContactInformation](@PersonID)", personIDParameter);
        }
    
        public virtual ObjectResult<SelectStoredProcedureChristian_Result> SelectStoredProcedureChristian(Nullable<int> territoryID)
        {
            var territoryIDParameter = territoryID.HasValue ?
                new ObjectParameter("territoryID", territoryID) :
                new ObjectParameter("territoryID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SelectStoredProcedureChristian_Result>("SelectStoredProcedureChristian", territoryIDParameter);
        }
    
        public virtual ObjectResult<string> SelectStoredProcedureChristian1()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<string>("SelectStoredProcedureChristian1");
        }
    
        public virtual ObjectResult<SelectStoredProcedureChristian3_Result> SelectStoredProcedureChristian3()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SelectStoredProcedureChristian3_Result>("SelectStoredProcedureChristian3");
        }
    
        public virtual ObjectResult<SelectStoredProcedureChristian4_Result> SelectStoredProcedureChristian4()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SelectStoredProcedureChristian4_Result>("SelectStoredProcedureChristian4");
        }
    
        public virtual int SelectStoredProcedureN()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SelectStoredProcedureN");
        }
    
        public virtual int sp_alterdiagram(string diagramname, Nullable<int> owner_id, Nullable<int> version, byte[] definition)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            var versionParameter = version.HasValue ?
                new ObjectParameter("version", version) :
                new ObjectParameter("version", typeof(int));
    
            var definitionParameter = definition != null ?
                new ObjectParameter("definition", definition) :
                new ObjectParameter("definition", typeof(byte[]));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_alterdiagram", diagramnameParameter, owner_idParameter, versionParameter, definitionParameter);
        }
    
        public virtual int sp_creatediagram(string diagramname, Nullable<int> owner_id, Nullable<int> version, byte[] definition)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            var versionParameter = version.HasValue ?
                new ObjectParameter("version", version) :
                new ObjectParameter("version", typeof(int));
    
            var definitionParameter = definition != null ?
                new ObjectParameter("definition", definition) :
                new ObjectParameter("definition", typeof(byte[]));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_creatediagram", diagramnameParameter, owner_idParameter, versionParameter, definitionParameter);
        }
    
        public virtual int sp_dropdiagram(string diagramname, Nullable<int> owner_id)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_dropdiagram", diagramnameParameter, owner_idParameter);
        }
    
        public virtual ObjectResult<sp_helpdiagramdefinition_Result> sp_helpdiagramdefinition(string diagramname, Nullable<int> owner_id)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_helpdiagramdefinition_Result>("sp_helpdiagramdefinition", diagramnameParameter, owner_idParameter);
        }
    
        public virtual ObjectResult<sp_helpdiagrams_Result> sp_helpdiagrams(string diagramname, Nullable<int> owner_id)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_helpdiagrams_Result>("sp_helpdiagrams", diagramnameParameter, owner_idParameter);
        }
    
        public virtual int sp_renamediagram(string diagramname, Nullable<int> owner_id, string new_diagramname)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            var new_diagramnameParameter = new_diagramname != null ?
                new ObjectParameter("new_diagramname", new_diagramname) :
                new ObjectParameter("new_diagramname", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_renamediagram", diagramnameParameter, owner_idParameter, new_diagramnameParameter);
        }
    
        public virtual int sp_upgraddiagrams()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_upgraddiagrams");
        }
    
        public virtual ObjectResult<uspGetBillOfMaterials_Result> uspGetBillOfMaterials(Nullable<int> startProductID, Nullable<System.DateTime> checkDate)
        {
            var startProductIDParameter = startProductID.HasValue ?
                new ObjectParameter("StartProductID", startProductID) :
                new ObjectParameter("StartProductID", typeof(int));
    
            var checkDateParameter = checkDate.HasValue ?
                new ObjectParameter("CheckDate", checkDate) :
                new ObjectParameter("CheckDate", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<uspGetBillOfMaterials_Result>("uspGetBillOfMaterials", startProductIDParameter, checkDateParameter);
        }
    
        public virtual ObjectResult<uspGetBillOfMaterials1_Result> uspGetBillOfMaterials1(Nullable<int> startProductID, Nullable<System.DateTime> checkDate, string altroParamentro)
        {
            var startProductIDParameter = startProductID.HasValue ?
                new ObjectParameter("StartProductID", startProductID) :
                new ObjectParameter("StartProductID", typeof(int));
    
            var checkDateParameter = checkDate.HasValue ?
                new ObjectParameter("CheckDate", checkDate) :
                new ObjectParameter("CheckDate", typeof(System.DateTime));
    
            var altroParamentroParameter = altroParamentro != null ?
                new ObjectParameter("AltroParamentro", altroParamentro) :
                new ObjectParameter("AltroParamentro", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<uspGetBillOfMaterials1_Result>("uspGetBillOfMaterials1", startProductIDParameter, checkDateParameter, altroParamentroParameter);
        }
    
        public virtual ObjectResult<uspGetEmployeeManagers_Result> uspGetEmployeeManagers(Nullable<int> businessEntityID)
        {
            var businessEntityIDParameter = businessEntityID.HasValue ?
                new ObjectParameter("BusinessEntityID", businessEntityID) :
                new ObjectParameter("BusinessEntityID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<uspGetEmployeeManagers_Result>("uspGetEmployeeManagers", businessEntityIDParameter);
        }
    
        public virtual ObjectResult<uspGetManagerEmployees_Result> uspGetManagerEmployees(Nullable<int> businessEntityID)
        {
            var businessEntityIDParameter = businessEntityID.HasValue ?
                new ObjectParameter("BusinessEntityID", businessEntityID) :
                new ObjectParameter("BusinessEntityID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<uspGetManagerEmployees_Result>("uspGetManagerEmployees", businessEntityIDParameter);
        }
    
        public virtual ObjectResult<uspGetWhereUsedProductID_Result> uspGetWhereUsedProductID(Nullable<int> startProductID, Nullable<System.DateTime> checkDate)
        {
            var startProductIDParameter = startProductID.HasValue ?
                new ObjectParameter("StartProductID", startProductID) :
                new ObjectParameter("StartProductID", typeof(int));
    
            var checkDateParameter = checkDate.HasValue ?
                new ObjectParameter("CheckDate", checkDate) :
                new ObjectParameter("CheckDate", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<uspGetWhereUsedProductID_Result>("uspGetWhereUsedProductID", startProductIDParameter, checkDateParameter);
        }
    
        public virtual int uspLogError(ObjectParameter errorLogID)
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("uspLogError", errorLogID);
        }
    
        public virtual int uspPrintError()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("uspPrintError");
        }
    
        public virtual int uspSearchCandidateResumes(string searchString, Nullable<bool> useInflectional, Nullable<bool> useThesaurus, Nullable<int> language)
        {
            var searchStringParameter = searchString != null ?
                new ObjectParameter("searchString", searchString) :
                new ObjectParameter("searchString", typeof(string));
    
            var useInflectionalParameter = useInflectional.HasValue ?
                new ObjectParameter("useInflectional", useInflectional) :
                new ObjectParameter("useInflectional", typeof(bool));
    
            var useThesaurusParameter = useThesaurus.HasValue ?
                new ObjectParameter("useThesaurus", useThesaurus) :
                new ObjectParameter("useThesaurus", typeof(bool));
    
            var languageParameter = language.HasValue ?
                new ObjectParameter("language", language) :
                new ObjectParameter("language", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("uspSearchCandidateResumes", searchStringParameter, useInflectionalParameter, useThesaurusParameter, languageParameter);
        }
    
        public virtual int uspUpdateEmployeeHireInfo(Nullable<int> businessEntityID, string jobTitle, Nullable<System.DateTime> hireDate, Nullable<System.DateTime> rateChangeDate, Nullable<decimal> rate, Nullable<byte> payFrequency, Nullable<bool> currentFlag)
        {
            var businessEntityIDParameter = businessEntityID.HasValue ?
                new ObjectParameter("BusinessEntityID", businessEntityID) :
                new ObjectParameter("BusinessEntityID", typeof(int));
    
            var jobTitleParameter = jobTitle != null ?
                new ObjectParameter("JobTitle", jobTitle) :
                new ObjectParameter("JobTitle", typeof(string));
    
            var hireDateParameter = hireDate.HasValue ?
                new ObjectParameter("HireDate", hireDate) :
                new ObjectParameter("HireDate", typeof(System.DateTime));
    
            var rateChangeDateParameter = rateChangeDate.HasValue ?
                new ObjectParameter("RateChangeDate", rateChangeDate) :
                new ObjectParameter("RateChangeDate", typeof(System.DateTime));
    
            var rateParameter = rate.HasValue ?
                new ObjectParameter("Rate", rate) :
                new ObjectParameter("Rate", typeof(decimal));
    
            var payFrequencyParameter = payFrequency.HasValue ?
                new ObjectParameter("PayFrequency", payFrequency) :
                new ObjectParameter("PayFrequency", typeof(byte));
    
            var currentFlagParameter = currentFlag.HasValue ?
                new ObjectParameter("CurrentFlag", currentFlag) :
                new ObjectParameter("CurrentFlag", typeof(bool));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("uspUpdateEmployeeHireInfo", businessEntityIDParameter, jobTitleParameter, hireDateParameter, rateChangeDateParameter, rateParameter, payFrequencyParameter, currentFlagParameter);
        }
    
        public virtual int uspUpdateEmployeeLogin(Nullable<int> businessEntityID, string loginID, string jobTitle, Nullable<System.DateTime> hireDate, Nullable<bool> currentFlag)
        {
            var businessEntityIDParameter = businessEntityID.HasValue ?
                new ObjectParameter("BusinessEntityID", businessEntityID) :
                new ObjectParameter("BusinessEntityID", typeof(int));
    
            var loginIDParameter = loginID != null ?
                new ObjectParameter("LoginID", loginID) :
                new ObjectParameter("LoginID", typeof(string));
    
            var jobTitleParameter = jobTitle != null ?
                new ObjectParameter("JobTitle", jobTitle) :
                new ObjectParameter("JobTitle", typeof(string));
    
            var hireDateParameter = hireDate.HasValue ?
                new ObjectParameter("HireDate", hireDate) :
                new ObjectParameter("HireDate", typeof(System.DateTime));
    
            var currentFlagParameter = currentFlag.HasValue ?
                new ObjectParameter("CurrentFlag", currentFlag) :
                new ObjectParameter("CurrentFlag", typeof(bool));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("uspUpdateEmployeeLogin", businessEntityIDParameter, loginIDParameter, jobTitleParameter, hireDateParameter, currentFlagParameter);
        }
    
        public virtual int uspUpdateEmployeePersonalInfo(Nullable<int> businessEntityID, string nationalIDNumber, Nullable<System.DateTime> birthDate, string maritalStatus, string gender)
        {
            var businessEntityIDParameter = businessEntityID.HasValue ?
                new ObjectParameter("BusinessEntityID", businessEntityID) :
                new ObjectParameter("BusinessEntityID", typeof(int));
    
            var nationalIDNumberParameter = nationalIDNumber != null ?
                new ObjectParameter("NationalIDNumber", nationalIDNumber) :
                new ObjectParameter("NationalIDNumber", typeof(string));
    
            var birthDateParameter = birthDate.HasValue ?
                new ObjectParameter("BirthDate", birthDate) :
                new ObjectParameter("BirthDate", typeof(System.DateTime));
    
            var maritalStatusParameter = maritalStatus != null ?
                new ObjectParameter("MaritalStatus", maritalStatus) :
                new ObjectParameter("MaritalStatus", typeof(string));
    
            var genderParameter = gender != null ?
                new ObjectParameter("Gender", gender) :
                new ObjectParameter("Gender", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("uspUpdateEmployeePersonalInfo", businessEntityIDParameter, nationalIDNumberParameter, birthDateParameter, maritalStatusParameter, genderParameter);
        }
    
        public virtual ObjectResult<GetElements_Result> GetElements()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetElements_Result>("GetElements");
        }
    }
}
