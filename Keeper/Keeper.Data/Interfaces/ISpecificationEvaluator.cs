using Keeper.Data.Specifications;

namespace Keeper.Data.Interfaces;

public interface ISpecificationEvaluator<T> where T : class
{
    IQueryable<T> GetQuery(IQueryable<T> inputQuery, BaseSpecification<T> specification);
}