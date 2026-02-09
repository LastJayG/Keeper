using Keeper.Data.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Keeper.Data.Specifications;

public class SpecificationEvaluator<T> : ISpecificationEvaluator<T> where T : class
{
    public IQueryable<T> GetQuery(IQueryable<T> inputQuery, BaseSpecification<T> spec)
    {
        var query = inputQuery;

        if (spec.Criteria != null)
            query = query.Where(spec.Criteria);

        foreach (var include in spec.Includes)
            query = query.Include(include);

        if (spec.OrderBy != null)
            query = query.OrderBy(spec.OrderBy);

        if (spec.IsPagingEnabled)
            query = query.Skip(spec.Skip).Take(spec.Take);

        return query; 
    }
}