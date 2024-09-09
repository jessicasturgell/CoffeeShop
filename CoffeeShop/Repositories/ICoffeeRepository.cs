using CoffeeShop.Models;

namespace CoffeeShop.Repositories
{
    public interface ICoffeeRepository
    {
        List<Coffee> GetAll();
        Coffee Get(int id);
        void Add(Coffee coffee);
        void Delete(int id);
        void Update(Coffee coffee);
    }
}