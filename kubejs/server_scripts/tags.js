// 监听标签事件
//添加物品标签
ServerEvents.tags('item', event => {
    //修改锆
    event.add('forge:completely_new_tag', 'forge:ores/zirconium')
    event.add('forge:completely_new_tag', 'forge:raw_materials/zirconium')
    event.add('forge:completely_new_tag', 'forge:ingots/zirconium')
    event.add('forge:completely_new_tag', 'forge:nuggets/zirconium')
    event.add('forge:completely_new_tag', 'forge:plates/zirconium')
    event.add('forge:completely_new_tag', 'forge:dusts/zirconium')

    event.add('forge:ores/zirconium', 'tinkers_reforged:titanium_ore')
    event.remove('forge:ores/titanium', 'tinkers_reforged:titanium_ore')
    event.add('forge:raw_materials/zirconium', 'tinkers_reforged:raw_titanium')
    event.remove('forge:raw_materials/titanium', 'tinkers_reforged:raw_titanium')
    event.add('forge:ingots/zirconium', 'tinkers_reforged:titanium_ingot')
    event.remove('forge:ingots/titanium', 'tinkers_reforged:titanium_ingot')
    event.add('forge:nuggets/zirconium', 'tinkers_reforged:titanium_nugget')
    event.remove('forge:nuggets/titanium', 'tinkers_reforged:titanium_nugget')
    event.add('forge:plates/zirconium', 'tinkers_reforged:titanium_plate')
    event.remove('forge:plates/titanium', 'tinkers_reforged:titanium_plate')
    event.add('forge:dusts/zirconium', 'tinkers_reforged:titanium_dust')
    event.remove('forge:dusts/titanium', 'tinkers_reforged:titanium_dust')


    event.add('forge:completely_new_tag', 'forge:ores/zirconium')
    event.add('forge:completely_new_tag', 'forge:storage_blocks/raw_zirconium')
    event.add('forge:completely_new_tag', 'forge:storage_blocks/zirconium')

    event.add('forge:ores/zirconium', 'tinkers_reforged:titanium_ore')
    event.remove('forge:ores/titanium', 'tinkers_reforged:titanium_ore')
    event.add('forge:storage_blocks/raw_zirconium', 'tinkers_reforged:raw_titanium_block')
    event.remove('forge:storage_blocks/raw_titanium', 'tinkers_reforged:raw_titanium_block')
    event.add('forge:storage_blocks/zirconium', 'tinkers_reforged:titanium_block')
    event.remove('forge:storage_blocks/titanium', 'tinkers_reforged:titanium_block')

    //添加超致密标签
    event.add('forge:ingots/ultra_dense', 'etshtinker:ultra_dense')
    event.add('forge:nuggets/ultra_dense', 'kubejs:ultra_dense_nugget')
    //添加钛粉标签
    event.add('forge:dusts/titanium', 'kubejs:titanium_dust')
    //添加钨的标签
    event.add('forge:ingots/tungsten', 'kubejs:tungsten_ingot')

})
//添加方块标签
ServerEvents.tags('block', event => {
    //修改锆
    event.add('forge:completely_new_tag', 'forge:ores/zirconium')
    event.add('forge:completely_new_tag', 'forge:storage_blocks/raw_zirconium')
    event.add('forge:completely_new_tag', 'forge:storage_blocks/zirconium')

    event.add('forge:ores/zirconium', 'tinkers_reforged:titanium_ore')
    event.remove('forge:ores/titanium', 'tinkers_reforged:titanium_ore')
    event.add('forge:storage_blocks/raw_zirconium', 'tinkers_reforged:raw_titanium_block')
    event.remove('forge:storage_blocks/raw_titanium', 'tinkers_reforged:raw_titanium_block')
    event.add('forge:storage_blocks/zirconium', 'tinkers_reforged:titanium_block')
    event.remove('forge:storage_blocks/titanium', 'tinkers_reforged:titanium_block')
    //接口tier1
    event.add('mm:fluid_ports/tier1', 'mm:steel_fluid_port_input')
    event.add('mm:item_ports/tier1', 'mm:steel_item_port_input')
    event.add('mm:energy_ports/tier1', 'mm:steel_energy_port_input')
    event.add('mm:fluid_ports/tier1', 'mm:steel_fluid_port_output')
    event.add('mm:item_ports/tier1', 'mm:steel_item_port_output')
    event.add('mm:energy_ports/tier1', 'mm:steel_energy_port_output')
    event.add('mm:kinetic_ports/tier1', 'mm:steel_kinetic_port_input')
    event.add('mm:kinetic_ports/tier1', 'mm:steel_kinetic_port_output')
    //接口tier2
    event.add('mm:fluid_ports/tier2', 'mm:hardlead_fluid_port_input')
    event.add('mm:item_ports/tier2', 'mm:hardlead_item_port_input')
    event.add('mm:energy_ports/tier2', 'mm:hardlead_energy_port_input')
    event.add('mm:fluid_ports/tier2', 'mm:hardlead_fluid_port_output')
    event.add('mm:item_ports/tier2', 'mm:hardlead_item_port_output')
    event.add('mm:energy_ports/tier2', 'mm:hardlead_energy_port_output')
    event.add('mm:air_ports/tier2', 'mm:hardlead_air_port_input')
    event.add('mm:kinetic_ports/tier2', 'mm:hardlead_kinetic_port_input')
    event.add('mm:air_ports/tier2', 'mm:hardlead_air_port_output')
    event.add('mm:kinetic_ports/tier2', 'mm:hardlead_kinetic_port_output')
    //接口tier3
    event.add('mm:fluid_ports/tier3', 'mm:ultra_dense_fluid_port_input')
    event.add('mm:item_ports/tier3', 'mm:ultra_dense_item_port_input')
    event.add('mm:energy_ports/tier3', 'mm:ultra_dense_energy_port_input')
    event.add('mm:fluid_ports/tier3', 'mm:ultra_dense_fluid_port_output')
    event.add('mm:item_ports/tier3', 'mm:ultra_dense_item_port_output')
    event.add('mm:energy_ports/tier3', 'mm:ultra_dense_energy_port_output')
    event.add('mm:gas_ports/tier3', 'mm:ultra_dense_gas_port_input')
    event.add('mm:slurry_ports/tier3', 'mm:ultra_dense_slurry_port_input')
    event.add('mm:infuse_ports/tier3', 'mm:ultra_dense_infuse_port_input')
    event.add('mm:air_ports/tier3', 'mm:ultra_dense_air_port_input')
    event.add('mm:kinetic_ports/tier3', 'mm:ultra_dense_kinetic_port_input')
    event.add('mm:gas_ports/tier3', 'mm:ultra_dense_gas_port_output')
    event.add('mm:slurry_ports/tier3', 'mm:ultra_dense_slurry_port_output')
    event.add('mm:infuse_ports/tier3', 'mm:ultra_dense_infuse_port_output')
    event.add('mm:air_ports/tier3', 'mm:ultra_dense_air_port_output')
    event.add('mm:kinetic_ports/tier3', 'mm:ultra_dense_kinetic_port_output')
    //接口tier4
    event.add('mm:energy_ports/tier4', 'mm:overcharged_ultra_dense_energy_port_input')
    event.add('mm:energy_ports/tier4', 'mm:overcharged_ultra_dense_energy_port_output')
    event.add('mm:item_ports/tier4', 'mm:overcharged_ultra_dense_item_port_input')
    event.add('mm:energy_ports/tier4', 'mm:overcharged_ultra_dense_energy_port_input')
    event.add('mm:fluid_ports/tier4', 'mm:overcharged_ultra_dense_fluid_port_output')
    event.add('mm:item_ports/tier4', 'mm:overcharged_ultra_dense_item_port_output')
    event.add('mm:gas_ports/tier4', 'mm:overcharged_ultra_dense_gas_port_input')
    event.add('mm:slurry_ports/tier4', 'mm:overcharged_ultra_dense_slurry_port_input')
    event.add('mm:infuse_ports/tier4', 'mm:overcharged_ultra_dense_infuse_port_input')
    event.add('mm:air_ports/tier4', 'mm:overcharged_ultra_dense_air_port_input')
    event.add('mm:kinetic_ports/tier4', 'mm:overcharged_ultra_dense_kinetic_port_input')
    event.add('mm:gas_ports/tier4', 'mm:overcharged_ultra_dense_gas_port_output')
    event.add('mm:slurry_ports/tier4', 'mm:overcharged_ultra_dense_slurry_port_output')
    event.add('mm:infuse_ports/tier4', 'mm:overcharged_ultra_dense_infuse_port_output')
    event.add('mm:air_ports/tier4', 'mm:overcharged_ultra_dense_air_port_output')
    event.add('mm:kinetic_ports/tier4', 'mm:overcharged_ultra_dense_kinetic_port_output')
    //接口tier5
    event.add('mm:fluid_ports/tier5', 'mm:protonium_fluid_port_input')
    event.add('mm:item_ports/tier5', 'mm:protonium_item_port_input')
    event.add('mm:energy_ports/tier5', 'mm:protonium_energy_port_input')
    event.add('mm:fluid_ports/tier5', 'mm:protonium_fluid_port_output')
    event.add('mm:item_ports/tier5', 'mm:protonium_item_port_output')
    event.add('mm:energy_ports/tier5', 'mm:protonium_energy_port_output')
    event.add('mm:gas_ports/tier5', 'mm:protonium_gas_port_input')
    event.add('mm:slurry_ports/tier5', 'mm:protonium_slurry_port_input')
    event.add('mm:infuse_ports/tier5', 'mm:protonium_infuse_port_input')
    event.add('mm:air_ports/tier5', 'mm:protonium_air_port_input')
    event.add('mm:kinetic_ports/tier5', 'mm:protonium_kinetic_port_input')
    event.add('mm:gas_ports/tier5', 'mm:protonium_gas_port_output')
    event.add('mm:slurry_ports/tier5', 'mm:protonium_slurry_port_output')
    event.add('mm:infuse_ports/tier5', 'mm:protonium_infuse_port_output')
    event.add('mm:air_ports/tier5', 'mm:protonium_air_port_output')
    event.add('mm:kinetic_ports/tier5', 'mm:protonium_kinetic_port_output')

    event.add('mm:fluid_ports/tier4', '#mm:fluid_ports/tier5')
    event.add('mm:item_ports/tier4', '#mm:item_ports/tier5')
    event.add('mm:energy_ports/tier4', '#mm:energy_ports/tier5')
    event.add('mm:gas_ports/tier4', '#mm:gas_ports/tier5')
    event.add('mm:slurry_ports/tier4', '#mm:slurry_ports/tier5')
    event.add('mm:infuse_ports/tier4', '#mm:infuse_ports/tier5')
    event.add('mm:air_ports/tier4', '#mm:air_ports/tier5')
    event.add('mm:kinetic_ports/tier4', '#mm:kinetic_ports/tier5')

    event.add('mm:fluid_ports/tier3', '#mm:fluid_ports/tier4')
    event.add('mm:item_ports/tier3', '#mm:item_ports/tier4')
    event.add('mm:energy_ports/tier3', '#mm:energy_ports/tier4')
    event.add('mm:gas_ports/tier3', '#mm:gas_ports/tier4')
    event.add('mm:slurry_ports/tier3', '#mm:slurry_ports/tier4')
    event.add('mm:infuse_ports/tier3', '#mm:infuse_ports/tier4')
    event.add('mm:air_ports/tier3', '#mm:air_ports/tier4')
    event.add('mm:kinetic_ports/tier3', '#mm:kinetic_ports/tier4')

    event.add('mm:fluid_ports/tier2', '#mm:fluid_ports/tier3')
    event.add('mm:item_ports/tier2', '#mm:item_ports/tier3')
    event.add('mm:energy_ports/tier2', '#mm:energy_ports/tier3')
    event.add('mm:air_ports/tier2', '#mm:air_ports/tier3')
    event.add('mm:kinetic_ports/tier2', '#mm:kinetic_ports/tier3')

    event.add('mm:fluid_ports/tier1', '#mm:fluid_ports/tier2')
    event.add('mm:item_ports/tier1', '#mm:item_ports/tier2')
    event.add('mm:energy_ports/tier1', '#mm:energy_ports/tier2')
    event.add('mm:kinetic_ports/tier1', '#mm:kinetic_ports/tier2')

    event.add('mm:is_neutronactivator_casing', '#mm:fluid_ports/tier5')
    event.add('mm:is_neutronactivator_casing', '#mm:item_ports/tier5')
    event.add('mm:is_neutronactivator_casing', '#mm:energy_ports/tier5')
    event.add('mm:is_neutronactivator_casing', '#mm:gas_ports/tier5')
    event.add('mm:is_neutronactivator_casing', '#mm:slurry_ports/tier5')
    event.add('mm:is_neutronactivator_casing', '#mm:infuse_ports/tier5')
    event.add('mm:is_neutronactivator_casing', 'mekanism:sps_casing')

    event.add('mm:integrated_fuel_engine_matter', 'mm:integrated_fuel_engine_item_port_input')
    event.add('mm:integrated_fuel_engine_matter', 'mm:integrated_fuel_engine_fluid_port_input')
    event.add('mm:integrated_fuel_engine_matter', 'mm:integrated_fuel_engine_gas_port_input')
    event.add('mm:integrated_fuel_engine_matter', 'mm:integrated_fuel_engine_gas_port_output')
    event.add('mm:integrated_fuel_engine_matter', 'mm:integrated_fuel_engine_item_port_output')
    event.add('mm:integrated_fuel_engine_matter', 'mm:integrated_fuel_engine_fluid_port_output')

    event.add('mm:integrated_fuel_engine_energy', 'mm:integrated_fuel_engine_kinetic_port_output')
    event.add('mm:integrated_fuel_engine_energy', 'mm:integrated_fuel_engine_air_port_output')
    event.add('mm:integrated_fuel_engine_energy', 'mm:integrated_fuel_engine_energy_port_output')
    
    event.add('mm:is_overloadinfuser_casing', '#mm:fluid_ports/tier3')
    event.add('mm:is_overloadinfuser_casing', '#mm:item_ports/tier3')
    event.add('mm:is_overloadinfuser_casing', '#mm:energy_ports/tier3')
    event.add('mm:is_overloadinfuser_casing', '#mm:gas_ports/tier3')
    event.add('mm:is_overloadinfuser_casing', '#mm:slurry_ports/tier3')
    event.add('mm:is_overloadinfuser_casing', '#mm:infuse_ports/tier3')
    event.add('mm:is_overloadinfuser_casing', 'pneumaticcraft:smooth_plastic_brick_black')

    event.add('mm:ports/tier1', '#mm:fluid_ports/tier1')
    event.add('mm:ports/tier1', '#mm:item_ports/tier1')
    event.add('mm:ports/tier1', '#mm:energy_ports/tier1')
    event.add('mm:ports/tier1', '#mm:kinetic_ports/tier1')

    event.add('mm:ports/tier2', '#mm:fluid_ports/tier2')
    event.add('mm:ports/tier2', '#mm:item_ports/tier2')
    event.add('mm:ports/tier2', '#mm:energy_ports/tier2')
    event.add('mm:ports/tier2', '#mm:kinetic_ports/tier2')
    event.add('mm:ports/tier2', '#mm:air_ports/tier2')

    event.add('mm:ports/tier3', '#mm:fluid_ports/tier3')
    event.add('mm:ports/tier3', '#mm:item_ports/tier3')
    event.add('mm:ports/tier3', '#mm:energy_ports/tier3')
    event.add('mm:ports/tier3', '#mm:kinetic_ports/tier3')
    event.add('mm:ports/tier3', '#mm:air_ports/tier3')
    event.add('mm:ports/tier3', '#mm:slurry_ports/tier3')
    event.add('mm:ports/tier3', '#mm:gas_ports/tier3')
    event.add('mm:ports/tier3', '#mm:infuse_ports/tier3')

    event.add('mm:ports/tier4', '#mm:fluid_ports/tier4')
    event.add('mm:ports/tier4', '#mm:item_ports/tier4')
    event.add('mm:ports/tier4', '#mm:energy_ports/tier4')
    event.add('mm:ports/tier4', '#mm:kinetic_ports/tier4')
    event.add('mm:ports/tier4', '#mm:air_ports/tier4')
    event.add('mm:ports/tier4', '#mm:slurry_ports/tier4')
    event.add('mm:ports/tier4', '#mm:gas_ports/tier4')
    event.add('mm:ports/tier4', '#mm:infuse_ports/tier4')

    event.add('mm:ports/tier5', '#mm:fluid_ports/tier5')
    event.add('mm:ports/tier5', '#mm:item_ports/tier5')
    event.add('mm:ports/tier5', '#mm:energy_ports/tier5')
    event.add('mm:ports/tier5', '#mm:kinetic_ports/tier5')
    event.add('mm:ports/tier5', '#mm:air_ports/tier5')
    event.add('mm:ports/tier5', '#mm:slurry_ports/tier5')
    event.add('mm:ports/tier5', '#mm:gas_ports/tier5')
    event.add('mm:ports/tier5', '#mm:infuse_ports/tier5')

    event.add('mm:is_manarestructerer', '#mm:ports/tier1')
    event.add('mm:is_manarestructerer', 'botania:mana_glass')

    event.add('mm:block_breakernplacer', 'mekanismgenerators:fission_reactor_casing')
    event.add('mm:block_breakernplacer', 'industrialforegoing:block_breaker')
    event.add('mm:block_breakernplacer', 'cyclic:miner')
    event.add('mm:block_breakernplacer', 'cyclic:breaker')

    event.add('mm:block_breakernplacer', 'industrialforegoing:block_placer')
    event.add('mm:block_breakernplacer', 'cyclic:user')
    event.add('mm:block_breakernplacer', 'cyclic:placer')
    event.add('mm:block_breakernplacer', 'mekanismgenerators:fission_reactor_casing')
})