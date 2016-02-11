/**
* Plugin configuration builder
*/
export class ConfigBuilder {

  useGlobalResources: boolean = true;
  globalResources = [];

  useAll(): ConfigBuilder {
    return this
      .useBox()
      .useButton()
      .useCard()
      .useCarousel()
      .useCheckbox()
      .useCollapsible()
      .useColors()
      .useDropdown()
      .useNavbar()
      .useParallax()
      .usePushpin()
      .useScrollfire()
      .useSelect()
      .useSidenav()
      .useSlider()
      .useSwitch()
      .useTabs()
      .useTooltip()
      .useTransitions()
      .useWaves()
      .useWell();
  }

  useBox(): ConfigBuilder {
    this.globalResources.push('./box/box');
    return this;
  }

  useButton(): ConfigBuilder {
    this.globalResources.push('./button/button');
    return this;
  }

  useCarousel(): ConfigBuilder {
    this.globalResources.push('./carousel/carousel');
    this.globalResources.push('./carousel/carousel-item');
    return this;
  }

  useCard(): ConfigBuilder {
    this.globalResources.push('./card/card');
    return this;
  }

  useCheckbox(): ConfigBuilder {
    this.globalResources.push('./checkbox/checkbox');
    return this;
  }

  /**
  * Use my control
  */
  useClickCounter(): ConfigBuilder {
    this.globalResources.push('./click-counter');
    return this;
  }

  useCollapsible(): ConfigBuilder {
    this.globalResources.push('./collapsible/collapsible');
    return this;
  }

  useColors() : ConfigBuilder {
    this.globalResources.push('./colors/md-colors.html');
    return this;
  }

  useDropdown() : ConfigBuilder {
    // this.globalResources.push('./dropdown/dropdown-element');
    this.globalResources.push('./dropdown/dropdown');
    return this;
  }

  useModal(): ConfigBuilder {
    this.globalResources.push('./modal/modal-trigger');
    return this;
  }

  useNavbar(): ConfigBuilder {
    this.globalResources.push('./navbar/navbar');
    return this;
  }

  useParallax(): ConfigBuilder {
    this.globalResources.push('./parallax/parallax');
    return this;
  }

  usePushpin(): ConfigBuilder {
    this.globalResources.push('./pushpin/pushpin');
    return this;
  }

  useScrollfire(): ConfigBuilder {
    this.globalResources.push('./scrollfire/scrollfire');
    this.globalResources.push('./scrollfire/scrollfire-target');
    return this;
  }

  useScrollSpy(): ConfigBuilder {
    this.globalResources.push('./scrollspy/scrollspy');
    return this;
  }

  useSelect(): ConfigBuilder {
    this.globalResources.push('./select/select');
    return this;
  }

  useSidenav(): ConfigBuilder {
    this.globalResources.push('./sidenav/sidenav');
    this.globalResources.push('./sidenav/sidenav-collapse');
    return this;
  }

  useSlider(): ConfigBuilder {
    this.globalResources.push('./slider/slider');
    // this.globalResources.push('./slider/slide');
    return this;
  }

  useSwitch(): ConfigBuilder {
    this.globalResources.push('./switch/switch');
    return this;
  }

  /**
   * Use materialized tabs
   */
  useTabs(): ConfigBuilder {
    this.globalResources.push('./tabs/tabs');
    return this;
  }

  useTooltip(): ConfigBuilder {
    this.globalResources.push('./tooltip/tooltip');
    return this;
  }

  useTransitions(): ConfigBuilder {
    this.globalResources.push('./transitions/fadein-image');
    this.globalResources.push('./transitions/staggered-list');
    return this;
  }

  /**
   * Use ripple/waves effect
   */
  useWaves(): ConfigBuilder {
    this.globalResources.push('./waves/waves');
    return this;
  }

  useWell(): ConfigBuilder {
    this.globalResources.push('./well/md-well.html');
    return this;
  }

  /**
  * Don't globalize any resources
  * Allows you to import yourself via <require></require>
  */
  withoutGlobalResources(): ConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }
}
