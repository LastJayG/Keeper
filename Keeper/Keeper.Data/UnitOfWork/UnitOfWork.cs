using Keeper.Data.Context;
using Keeper.Data.Interfaces;
using Microsoft.EntityFrameworkCore.Storage;

namespace Keeper.Data.UnitOfWork;

public class UnitOfWork(KeeperDbContext context, IDbContextTransaction? transaction) : IUnitOfWork
{
    public async Task BeginTransactionAsync()
    {
        if (transaction != null)
        {
            throw new InvalidOperationException("A transaction is already in progress.");
        }

        transaction = await context.Database.BeginTransactionAsync();
    }

    public async Task CommitTransactionAsync()
    {
        try
        {
            await context.SaveChangesAsync();
            await transaction?.CommitAsync()!;
        }
        catch
        {
            await RollbackTransactionAsync();
            throw;
        }
        finally
        {
            if (transaction != null)
            {
                await transaction.DisposeAsync();
                transaction = null;
            }
        }
    }

    public async Task RollbackTransactionAsync()
    {
        try
        {
            await transaction?.RollbackAsync()!;
        }
        finally
        {
            if (transaction != null)
            {
                await transaction.DisposeAsync();
                transaction = null;
            }
        }
    }

    public async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        return await context.SaveChangesAsync(cancellationToken);
    }
}
