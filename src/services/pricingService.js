const Pricing = require('../models/pricingModel');

class PricingService {
  async calculateTotalPrice(organizationId, zone, totalDistance, itemType) {
    // Fetch pricing details from the database based on organizationId, zone, and itemType
    const pricing = await Pricing.findOne({
      where: {
        organization_id: organizationId,
        zone: zone,
        item_type: itemType
      }
    });

    if (!pricing) {
      throw new Error('Pricing information not found');
    }

    // Calculate total price
    let totalPrice = 0;
    const baseDistance = pricing.base_distance_in_km;
    const kmPrice = pricing.km_price;
    const fixPrice = pricing.fix_price;

    if (totalDistance <= baseDistance) {
      totalPrice = fixPrice;
    } else {
      const additionalDistance = totalDistance - baseDistance;
      totalPrice = fixPrice + additionalDistance * kmPrice;
    }

    // Return the total price
    return totalPrice;
  }
}

module.exports = new PricingService();
