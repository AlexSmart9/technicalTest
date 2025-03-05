const { findCategoryServices, createCategoryServices } = require('../services/category.services');
const catchError = require('../utils/catchError');

const updateCategory = catchError(async (req, res, next) => {
    let { quantity, categoryName} = req.result;
    let product = req.product

    // Verifica que categoryName esté definido
    if (!categoryName) {
        return res.status(400).json({ message: 'categoryName cannot be null or undefined' });
    }

    let category = await findCategoryServices(categoryName);
    if (category) {
        // Actualiza la cantidad de productos en la categoría existente
        await category.update({
            categoryProductQuantity: category.categoryProductQuantity + Number(quantity)
        });
    } else {
        // Crea una nueva categoría
        category = await createCategoryServices({ categoryName, categoryProductQuantity: Number(quantity) });
    }

    // Asigna el ID de la categoría a req.result
    await product.update({categoryId : category.id})

    next();
});

module.exports = updateCategory;