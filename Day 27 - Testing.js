
static class TestDataEmptyArray {
        public static int[] get_array() {
            int[] arr = {};
            return arr; 
        }
    }

    static class TestDataUniqueValues {
        
        static int[] arr = {1,2,3,4};

        public static int[] get_array() {
            return arr; 
        }

        public static int get_expected_result() {
            return 0; 
        }
    }

    static class TestDataExactlyTwoDifferentMinimums {

        static int[] arr = {0,0,1}; 

        public static int[] get_array() {
            return arr; 
        }

        public static int get_expected_result() {
            return 0; 
        }
    }
