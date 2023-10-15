// Write your classes here

    class Tree {
        constructor(species) {
            this.species = species;
        }

        static definition() {
            return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."

        }
    }
    class tree {
        constructor(species) {
            this.species = species;
        }

        static definition() {
            return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
          }
        }
        

    class Deciduous extends tree {
        constructor(species, name) {
            super(species);
            this.name = name;
        }

        static definition() {
            const treeDefinition = super.definition();
            return `${treeDefinition} Deciduous trees shed their leaves annually.`;
        }
    }

        class Evergreen extends Tree {
            constructor(species, name) {
              super(species); 
              this.name = name; 
            }
          

          static definition() {
            // Use super to access the parent class's definition()
            const treeDefinition = super.definition();
            return `${treeDefinition} Evergreens keep their leaves all year round.`;
          }
        }
        
    